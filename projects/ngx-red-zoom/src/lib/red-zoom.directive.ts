import {
    AfterContentInit,
    Directive,
    ElementRef,
    Inject,
    Input,
    NgZone,
    Renderer2,
    OnChanges,
    SimpleChanges,
    HostBinding, OnDestroy, PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RedZoomTemplate } from './red-zoom-template.class';
import { RedZoomStatus } from './red-zoom-status.type';
import { RedZoomImage } from './red-zoom-image.class';
import * as vector from './vector';
import { VectorNumber } from './vector';


interface Session {
    active: boolean;
    thumbSize: vector.VectorNumber;
    thumbPos: vector.VectorNumber;
    lensContainerSize: vector.VectorNumber;
    lensImageSize: vector.VectorNumber;
    frameSize: vector.VectorNumber;
    mousePos: vector.VectorNumber;
    destroy: () => void;
}


@Directive({
    selector: '[redZoom]',
    exportAs: 'redZoom',
})
export class RedZoomDirective implements AfterContentInit, OnChanges, OnDestroy {
    @Input('src') @HostBinding('attr.src') src: string;

    @Input('redZoom') lensSrc: string;

    @Input('redZoomThumb') thumbSrc: string;

    @Input('redZoomLazy') lazy: boolean = false;

    @Input('redZoomClass') classes: string = '';

    @Input('redZoomBehavior') behavior: 'hover' | 'grab' | 'click' = 'hover';

    @Input('redZoomMouseWheel') wheel: boolean = true;

    @Input('redZoomErrorMessage') errorMessage: string = 'An error occurred while loading the image.';

    template: RedZoomTemplate;
    thumbImage: RedZoomImage;
    frameImage: RedZoomImage;
    lensImage: RedZoomImage;
    scaleFactor = 1;
    session: Session;
    requestAnimationFrameId = null;

    get isImage(): boolean {
        return this.element.nativeElement.tagName === 'IMG';
    }

    get status(): RedZoomStatus {
        let status: RedZoomStatus = 'loaded';
        const images = [this.frameImage, this.lensImage];

        if (this.isImage) {
            images.push(this.thumbImage);
        }

        for (let image of images) {
            if (status === 'error' || image.status === 'error') {
                status = 'error';
            } else if (status === 'loading' || image.status === 'loading') {
                status = 'loading';
            }
        }

        return status;
    }

    constructor(
        private element: ElementRef,
        private renderer: Renderer2,
        private zone: NgZone,
        @Inject(PLATFORM_ID) private platformId: string,
    ) { }

    listen(): void {
        const startEventName = {
            'hover': 'mouseenter',
            'grab': 'mousedown',
            'click': 'mousedown',
        }[this.behavior];

        this.unlisten();
        this.unlisten = this.renderer.listen(this.element.nativeElement, startEventName, this.mouseEnter);
    }

    unlisten: () => void  = () => {};

    onImageChangeStatus = (() => {
        let previousStatus;

        return () => {
            if (previousStatus === this.status) {
                return;
            }

            previousStatus = this.status;

            this.onImageChangeStatusDistinct();
        };
    })();

    onImageChangeStatusDistinct = () => {
        this.template.status = this.status;

        if (this.status === 'loaded') {
            this.template.setProperties({
                '--red-zoom-lens-image-natural-w': `${this.lensImage.naturalWidth}px`,
                '--red-zoom-lens-image-natural-h': `${this.lensImage.naturalHeight}px`,
            });

            if (this.session && this.session.active) {
                this.calcScaleFactor();
                this.calcFrameSize();
                this.move();

                this.scaleFactor = this.lensImage.width / this.lensImage.naturalWidth;
            }
        }
    };

    ngAfterContentInit(): void {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }

        this.zone.runOutsideAngular(() => {
            this.template = new RedZoomTemplate();
            this.template.classes = this.classes;
            this.template.errorMessage.innerHTML = this.errorMessage;

            if (this.isImage) {
                this.thumbImage = new RedZoomImage(this.element.nativeElement, this.onImageChangeStatus);
            }

            this.frameImage = new RedZoomImage(null, this.onImageChangeStatus, 'red-zoom__frame-image');
            this.lensImage = new RedZoomImage(null, this.onImageChangeStatus, 'red-zoom__lens-image');

            if (!this.lazy) {
                this.loadFrameImage();
                this.loadLensImage();
            }

            this.listen();
        });
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }

        if ('src' in changes && !changes.src.firstChange) {
            this.onChangeThumbSrc();
        }
        if ('thumbSrc' in changes && !changes.thumbSrc.firstChange) {
            this.onChangeThumbSrc();
        }
        if ('lensSrc' in changes && !changes.lensSrc.firstChange) {
            this.onChangeLensSrc();
        }
        if ('behavior' in changes && !changes.behavior.firstChange) {
            this.listen();
        }
        if ('classes' in changes && !changes.classes.firstChange) {
            this.template.classes = this.classes;
            this.invalidate();
        }
        if ('errorMessage' in changes && !changes.errorMessage.firstChange) {
            this.template.errorMessage.innerHTML = this.errorMessage;
        }
    }

    ngOnDestroy(): void {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }

        if (this.session) {
            this.session.destroy();
        }
    }

    onChangeThumbSrc(): void {
        this.frameImage.reset();

        if (!this.lazy || this.session) {
            this.loadFrameImage();
        }
    }

    onChangeLensSrc(): void {
        this.lensImage.reset();

        if (!this.lazy || this.session) {
            this.loadLensImage();
        }
    }

    getThumbSrc(): string {
        if (!this.isImage || !this.src) {
            return this.thumbSrc;
        }

        return this.src;
    }

    loadLensImage() {
        if (this.lensImage.status !== 'loaded') {
            this.lensImage.src = this.lensSrc;
        }
    }

    loadFrameImage() {
        if (this.frameImage.status !== 'loaded') {
            this.frameImage.src = this.getThumbSrc();
        }
    }

    mouseEnter = (event: MouseEvent) => {
        if (event.cancelable) {
            event.preventDefault();
        }

        if (this.session) {
            this.session.destroy();
        }

        this.session = {
            active: false,
            thumbSize: null,
            thumbPos: null,
            lensContainerSize: null,
            lensImageSize: null,
            frameSize: null,
            mousePos: vector.fromMouseEvent(event),
            destroy: () => {},
        };

        const onWheel = (wheelEvent: WheelEvent) => {
            if (!wheelEvent.cancelable || this.status !== 'loaded' || !this.wheel) {
                return;
            }

            wheelEvent.preventDefault();

            const delta = Math.sign(wheelEvent.deltaY);

            this.scaleFactor += .01 * -delta;

            this.calcScaleFactor();
            this.calcFrameSize();
            this.onMouseMove(
                this.behavior === 'click' ? this.session.mousePos : vector.fromMouseEvent(wheelEvent),
            );
        };

        const onMove = (mouseEvent: MouseEvent) => {
            this.onMouseMove(vector.fromMouseEvent(mouseEvent));
        };
        const onLeave = () => {
            this.session = null;
            this.template.detach();

            unListenMove();
            unListenLeave();
            unListenWheel();
        };

        let unListenMove;
        let unListenLeave;
        let unListenWheel;

        if (this.behavior === 'hover') {
            unListenMove = this.renderer.listen(this.element.nativeElement, 'mousemove', onMove);
            unListenLeave = this.renderer.listen(this.element.nativeElement, 'mouseleave', onLeave);
        } else if (this.behavior === 'click') {
            unListenMove = () => {};
            unListenLeave = this.renderer.listen(document, 'mousedown', (event) => {
                const element = this.element.nativeElement as HTMLElement;

                if (!element.contains(event.target)) {
                    onLeave();
                }
            });
        } else {
            unListenMove = this.renderer.listen(document, 'mousemove', onMove);
            unListenLeave = this.renderer.listen(document, 'mouseup', onLeave);
        }

        unListenWheel = this.renderer.listen(this.element.nativeElement, 'wheel', onWheel);

        this.onMouseMove(vector.fromMouseEvent(event));

        this.forceReflow();
        this.template.activate();

        if (this.status !== 'loaded') {
            this.loadLensImage();
            this.loadFrameImage();
        }

        this.session.destroy = onLeave;
    };

    onMouseMove = (mousePos: VectorNumber) => {
        if (this.isImage && this.thumbImage.status !== 'loaded' && this.thumbImage.isFirst) {
            return;
        }

        if (!this.session.active) {
            this.session.active = true;
            this.initSession();
        }

        this.session.mousePos = mousePos;

        if (this.status === 'loaded') {
            cancelAnimationFrame(this.requestAnimationFrameId);

            this.requestAnimationFrameId = requestAnimationFrame(() => this.move());
        }
    };

    initSession(): void {
        const thumbRect = this.element.nativeElement.getBoundingClientRect();

        this.session.thumbSize = vector.fromRectSize(thumbRect);
        this.session.thumbPos = vector.add(vector.fromRectPos(thumbRect), vector.fromScroll());

        this.template.attach();
        this.template.lensBody.appendChild(this.lensImage.element);
        this.template.frameBody.appendChild(this.frameImage.element);

        this.template.setProperties({
            '--red-zoom-thumb-x': `${this.session.thumbPos.x}px`,
            '--red-zoom-thumb-y': `${this.session.thumbPos.y}px`,
            '--red-zoom-thumb-w': `${this.session.thumbSize.x}px`,
            '--red-zoom-thumb-h': `${this.session.thumbSize.y}px`,
            '--red-zoom-thumb-size-max': `${vector.flatMax(this.session.thumbSize)}px`,
            '--red-zoom-thumb-size-min': `${vector.flatMin(this.session.thumbSize)}px`,
        });

        if (this.status === 'loaded') {
            this.calcScaleFactor();
            this.calcFrameSize();

            this.scaleFactor = this.lensImage.width / this.lensImage.naturalWidth;
        }
    }

    calcScaleFactor(): void {
        const scaledSize = vector.mul(this.lensImage.naturalSize, this.scaleFactor);

        this.lensImage.styleSize = vector.map(scaledSize, c => `${c}px`);

        const scaleFactorIsLimited = vector.flatOr(
            vector.notEqual(this.lensImage.size, vector.round(scaledSize))
        );

        if (scaleFactorIsLimited) {
            this.scaleFactor = vector.flatMax(vector.div(this.lensImage.size, this.lensImage.naturalSize));

            this.lensImage.styleSize = vector.map(vector.mul(this.lensImage.naturalSize, this.scaleFactor), c => `${c}px`);
        }
    }

    calcFrameSize(): void {
        this.session.lensContainerSize = vector.fromRectSize(this.template.lensBody.getBoundingClientRect());
        this.session.lensImageSize = vector.fromRectSize(this.lensImage.element.getBoundingClientRect());

        this.session.frameSize = vector.min(
            this.session.thumbSize,
            vector.round(
                vector.mul(
                    this.session.thumbSize, vector.div(this.session.lensContainerSize, this.session.lensImageSize)
                )
            )
        );

        this.template.setProperties({
            '--red-zoom-frame-w': `${this.session.frameSize.x}px`,
            '--red-zoom-frame-h': `${this.session.frameSize.y}px`,
        });
    }

    move(): void {
        if (!this.session || !this.session.active) {
            return;
        }

        const { mousePos, thumbSize, thumbPos, frameSize, lensContainerSize, lensImageSize } = this.session;

        this.template.setProperties({
            '--red-zoom-mouse-x': `${mousePos.x}px`,
            '--red-zoom-mouse-y': `${mousePos.y}px`,
        });

        const framePos = vector.sub(mousePos, vector.div(frameSize, 2));
        const frameLimitedPos = vector.min(
            vector.max(framePos, thumbPos),
            vector.sub(vector.add(thumbPos, thumbSize), frameSize),
        );
        const frameImagePos = vector.sub(thumbPos, vector.round(frameLimitedPos));

        this.template.setProperties({
            '--red-zoom-frame-x': `${Math.round(frameLimitedPos.x)}px`,
            '--red-zoom-frame-y': `${Math.round(frameLimitedPos.y)}px`,
            '--red-zoom-frame-image-x': `${Math.round(frameImagePos.x)}px`,
            '--red-zoom-frame-image-y': `${Math.round(frameImagePos.y)}px`,
        });

        const frameRelativePos = vector.map(vector.sub(thumbSize, frameSize), (value, axis) => {
            return value === 0 ? 0 : (frameLimitedPos[axis] - thumbPos[axis]) / value;
        });
        const lensImagePos = vector.mul(
            frameRelativePos,
            vector.sub(lensImageSize, lensContainerSize)
        );
        const lensImageCenterOffset = vector.max(vector.div(vector.sub(lensContainerSize, lensImageSize), 2), 0);
        const lensImageFrameOffset = vector.mul(
            vector.div(vector.sub(framePos, frameLimitedPos), vector.div(frameSize, 2)),
            vector.div(lensContainerSize, 2)
        );

        this.template.setProperties({
            '--red-zoom-lens-image-base-x': `${-lensImagePos.x}px`,
            '--red-zoom-lens-image-base-y': `${-lensImagePos.y}px`,
            '--red-zoom-lens-image-center-offset-x': `${lensImageCenterOffset.x}px`,
            '--red-zoom-lens-image-center-offset-y': `${lensImageCenterOffset.y}px`,
            '--red-zoom-lens-image-frame-offset-x': `${-lensImageFrameOffset.x}px`,
            '--red-zoom-lens-image-frame-offset-y': `${-lensImageFrameOffset.y}px`,
        });
    }

    invalidate() {
        if (this.session && this.session.active) {
            this.initSession();
            this.move();
        }
    }

    forceReflow(): void {
        this.element.nativeElement.getBoundingClientRect();
    }
}
