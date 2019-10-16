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


interface Session {
    active: boolean;
    thumbnailRect: DOMRect | ClientRect;
    previewImageRect: DOMRect | ClientRect;
    previewContainerRect: DOMRect | ClientRect;
    lensW: number;
    lensH: number;
    scrollX: number;
    scrollY: number;
    prevMouseX: number;
    prevMouseY: number;
    destroy: () => void;
}


@Directive({
    selector: '[redZoom]',
    exportAs: 'redZoom',
})
export class RedZoomDirective implements AfterContentInit, OnChanges, OnDestroy {
    @Input('src') @HostBinding('attr.src') src: string;

    @Input('redZoom') lensSrc: string;

    @Input('redZoomThumbnail') thumbSrc: string;

    @Input('redZoomLazy') lazy: boolean = false;

    @Input('redZoomClass') classes: string = '';

    @Input('redZoomTrigger') trigger: 'hover' | 'click' = 'hover';

    @Input('redZoomMouseWheel') wheel: boolean = true;

    @Input('redZoomErrorMessage') errorMessage: string = 'An error occurred while loading the image.';

    template: RedZoomTemplate;
    thumbImage: RedZoomImage;
    frameImage: RedZoomImage;
    lensImage: RedZoomImage;
    z = 1;

    unlisten: () => void  = () => {};

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
            } else if (status === 'pending' || image.status === 'pending') {
                status = 'pending';
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
            'click': 'mousedown',
        }[this.trigger];
        const endEventName = {
            'hover': 'mouseleave',
            'click': 'mouseup',
        }[this.trigger];

        this.unlisten();
        this.unlisten = this.renderer.listen(this.element.nativeElement, startEventName, e => this.mouseEnter(e, endEventName));
    }

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
        this.template.state = this.status;

        if (this.status === 'loaded') {
            this.template.setProperties({
                '--red-zoom-preview-w': `${this.lensImage.naturalWidth}px`,
                '--red-zoom-preview-h': `${this.lensImage.naturalHeight}px`,
            });

            if (this.session) {
                this.calcZoomRatio();
                this.calcFrameSize();
                this.move(this.session.prevMouseX, this.session.prevMouseY);

                this.z = this.lensImage.width / this.lensImage.naturalWidth;
                this.z = Math.max(
                    this.z,
                    this.session.previewContainerRect.width / this.lensImage.naturalWidth,
                    this.session.previewContainerRect.height / this.lensImage.naturalHeight,
                );
            }
        }
    };

    ngAfterContentInit(): void {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }

        this.zone.runOutsideAngular(() => {
            if (this.isImage) {
                this.thumbImage = new RedZoomImage(this.element.nativeElement, this.onImageChangeStatus);
            }

            this.template = new RedZoomTemplate();
            this.template.classes = this.classes;
            this.template.errorMessage.innerHTML = this.errorMessage;

            this.frameImage = new RedZoomImage(null, this.onImageChangeStatus);
            this.frameImage.element.classList.add('red-zoom__lens-image');

            this.lensImage = new RedZoomImage(null, this.onImageChangeStatus);
            this.lensImage.element.classList.add('red-zoom__window-image');

            if (!this.lazy) {
                this.loadWindowImage();
                this.loadFrameImage();
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
        if ('trigger' in changes && !changes.trigger.firstChange) {
            this.listen();
        }
        if ('classes' in changes && !changes.classes.firstChange) {
            this.template.classes = this.classes;

            // TODO: invalidate if session active
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
            this.loadWindowImage();
        }
    }

    getThumbSrc(): string {
        if (!this.isImage || !this.src) {
            return this.thumbSrc;
        }

        return this.src;
    }

    loadWindowImage() {
        if (this.lensImage.status !== 'loaded') {
            this.lensImage.src = this.lensSrc;
        }
    }

    loadFrameImage() {
        if (this.frameImage.status !== 'loaded') {
            this.frameImage.src = this.getThumbSrc();
        }
    }

    mouseEnter = (event: MouseEvent, endEventName) => {
        if (event.cancelable) {
            event.preventDefault();
        }

        this.session = {
            active: false,
            thumbnailRect: null,
            previewContainerRect: null,
            previewImageRect: null,
            lensW: 0,
            lensH: 0,
            scrollX: null,
            scrollY: null,
            prevMouseX: event.clientX,
            prevMouseY: event.clientY,
            destroy: () => {},
        };

        const onWheel = (wheelEvent: WheelEvent) => {
            if (!wheelEvent.cancelable || this.status !== 'loaded' || !this.wheel) {
                return;
            }

            wheelEvent.preventDefault();

            const delta = Math.sign(wheelEvent.deltaY);

            this.z += .01 * -delta;

            this.calcZoomRatio();
            this.calcFrameSize();
            this.onMouseMove(wheelEvent);
        };

        const onMove = (mouseEvent: MouseEvent) => {
            this.onMouseMove(mouseEvent);
        };
        const onLeave = () => {
            this.session = null;
            this.template.detach();

            unListenMove();
            unListenLeave();
            unListenWheel();
        };

        const unListenMove = this.renderer.listen(this.element.nativeElement, 'mousemove', onMove);
        const unListenLeave = this.renderer.listen(this.element.nativeElement, endEventName, onLeave);
        const unListenWheel = this.renderer.listen(this.element.nativeElement, 'wheel', onWheel);

        this.onMouseMove(event);

        this.forceReflow();
        this.template.activate();

        if (this.status === 'error') {
            this.template.state = 'error';
        } else if (this.status !== 'loaded') {
            this.template.state = 'loading';
            this.loadWindowImage();
            this.loadFrameImage();
        }

        this.session.destroy = onLeave;
    };

    onMouseMove = (event: MouseEvent) => {
        if (this.isImage && this.thumbImage.status !== 'loaded') {
            return;
        }

        if (!this.session.active) {
            this.session.active = true;
            this.initSession();
        }

        this.session.prevMouseX = event.clientX;
        this.session.prevMouseY = event.clientY;

        if (this.status === 'loaded') {
            cancelAnimationFrame(this.requestAnimationFrameId);

            this.requestAnimationFrameId = requestAnimationFrame(() => {
                this.move(event.clientX, event.clientY);
            });
        }
    };

    initSession(): void {
        this.session.thumbnailRect = this.element.nativeElement.getBoundingClientRect();
        this.session.scrollX = scrollX;
        this.session.scrollY = scrollY;

        const thumbnailRect = this.session.thumbnailRect;

        const x = thumbnailRect.left + scrollX;
        const y = thumbnailRect.top + scrollY;
        const w = thumbnailRect.width;
        const h = thumbnailRect.height;

        this.template.attach();
        this.template.windowBody.appendChild(this.lensImage.element);
        this.template.lensBody.appendChild(this.frameImage.element);

        this.template.setProperties({
            '--red-zoom-thumbnail-x': `${x}px`,
            '--red-zoom-thumbnail-y': `${y}px`,
            '--red-zoom-thumbnail-w': `${w}px`,
            '--red-zoom-thumbnail-h': `${h}px`,
            '--red-zoom-thumbnail-size-max': `${Math.max(w, h)}px`,
            '--red-zoom-thumbnail-size-min': `${Math.min(w, h)}px`,
        });

        this.frameImage.element.style.width = `${w}px`;
        this.frameImage.element.style.height = `${h}px`;

        if (this.status === 'loaded') {
            this.calcZoomRatio();
            this.calcFrameSize();

            this.z = this.lensImage.width / this.lensImage.naturalWidth;
            this.z = Math.max(
                this.z,
                this.session.previewContainerRect.width / this.lensImage.naturalWidth,
                this.session.previewContainerRect.height / this.lensImage.naturalHeight,
            );
        }
    }

    calcZoomRatio(): void {
        this.lensImage.style.width = `${this.lensImage.naturalWidth * this.z}px`;
        this.lensImage.style.height = `${this.lensImage.naturalHeight * this.z}px`;

        if (this.lensImage.width != Math.round(this.lensImage.naturalWidth * this.z)) {
            this.z = this.lensImage.width / this.lensImage.naturalWidth;

            this.lensImage.style.width = `${this.lensImage.naturalWidth * this.z}px`;
            this.lensImage.style.height = `${this.lensImage.naturalHeight * this.z}px`;
        }
        if (this.lensImage.height != Math.round(this.lensImage.naturalHeight * this.z)) {
            this.z = this.lensImage.height / this.lensImage.naturalHeight;

            this.lensImage.style.width = `${this.lensImage.naturalWidth * this.z}px`;
            this.lensImage.style.height = `${this.lensImage.naturalHeight * this.z}px`;
        }
    }

    calcFrameSize(): void {
        this.session.previewContainerRect = this.template.windowBody.getBoundingClientRect();
        this.session.previewImageRect = this.lensImage.element.getBoundingClientRect();

        const thumbnailRect = this.session.thumbnailRect;
        const previewContainerRect = this.session.previewContainerRect;
        const previewImageRect = this.session.previewImageRect;

        this.session.lensW = Math.min(thumbnailRect.width, Math.round(thumbnailRect.width * (previewContainerRect.width / previewImageRect.width)));
        this.session.lensH = Math.min(thumbnailRect.height, Math.round(thumbnailRect.height * (previewContainerRect.height / previewImageRect.height)));

        this.template.setProperties({
            '--red-zoom-lens-w': `${this.session.lensW}px`,
            '--red-zoom-lens-h': `${this.session.lensH}px`,
        });
    }

    move(x: number, y: number): void {
        if (!this.session) {
            return;
        }

        const thumbnailRect = this.session.thumbnailRect;
        const previewContainerRect = this.session.previewContainerRect;
        const previewImageRect = this.session.previewImageRect;
        const lensW = this.session.lensW;
        const lensH = this.session.lensH;
        const scrollDeltaX = this.session.scrollX - scrollX;
        const scrollDeltaY = this.session.scrollY - scrollY;
        const thumbnailLeft = thumbnailRect.left + scrollDeltaX;
        const thumbnailTop = thumbnailRect.top + scrollDeltaY;

        this.template.setProperties({
            '--red-zoom-mouse-x': `${x + scrollX}px`,
            '--red-zoom-mouse-y': `${y + scrollY}px`,
        });

        const lensXr = x - lensW / 2;
        const lensX = Math.round(Math.min(
            thumbnailLeft + thumbnailRect.width - lensW,
            Math.max(
                thumbnailLeft,
                lensXr
            )
        ));
        const lensYr = y - lensH / 2;
        const lensY = Math.min(
            thumbnailTop + thumbnailRect.height - lensH,
            Math.max(
                thumbnailTop,
                lensYr
            )
        );

        this.template.setProperties({
            '--red-zoom-lens-x': `${Math.round(lensX) + scrollX}px`,
            '--red-zoom-lens-y': `${Math.round(lensY) + scrollY}px`,
            '--red-zoom-lens-image-x': `${Math.round(-lensX + thumbnailLeft)}px`,
            '--red-zoom-lens-image-y': `${Math.floor(-lensY + thumbnailTop)}px`,
        });

        const posX = (thumbnailRect.width - lensW === 0 ? 0 : Math.max(
            0,
            Math.min(
                previewImageRect.width - previewContainerRect.width,
                ((lensX - thumbnailLeft) / (thumbnailRect.width - lensW)) * (previewImageRect.width - previewContainerRect.width)
            )
        )) - Math.max(
            0,
            (previewContainerRect.width - previewImageRect.width) / 2,
        );
        const posX2 = (thumbnailRect.width - lensW === 0 ? 0 : ((lensXr - thumbnailLeft) / (thumbnailRect.width - lensW)) * (previewImageRect.width - previewContainerRect.width)) - Math.max(
            0,
            (previewContainerRect.width - previewImageRect.width) / 2,
        );
        const posY = (thumbnailRect.height - lensH === 0 ? 0 : Math.max(
            0,
            Math.min(
                previewImageRect.height - previewContainerRect.height,
                ((lensY - thumbnailTop) / (thumbnailRect.height - lensH)) * (previewImageRect.height - previewContainerRect.height)
            )
        )) - Math.max(
            0,
            (previewContainerRect.height - previewImageRect.height) / 2,
        );
        const posY2 = (thumbnailRect.height - lensH === 0 ? 0 : ((lensYr - thumbnailTop) / (thumbnailRect.height - lensH)) * (previewImageRect.height - previewContainerRect.height)) - Math.max(
            0,
            (previewContainerRect.height - previewImageRect.height) / 2,
        );

        this.template.setProperties({
            '--red-zoom-preview-image-x': `${-posX}px`,
            '--red-zoom-preview-image-y': `${-posY}px`,
            '--red-zoom-preview-image-offset-x': `${posX === posX2 ? 0 : posX - posX2}px`,
            '--red-zoom-preview-image-offset-y': `${posY === posY2 ? 0 : posY - posY2}px`,
        });
    }

    invalidate() {
        if (this.session && this.session.active) {
            this.initSession();
            this.move(this.session.prevMouseX, this.session.prevMouseY);
        }
    }

    disable(): void {
        this.template.template.classList.add('red-zoom--disabled');
    }

    enable(): void {
        if (this.session && this.session.active) {
            this.initSession();
            this.move(this.session.prevMouseX, this.session.prevMouseY);
        }

        this.template.template.classList.remove('red-zoom--disabled');
    }

    forceReflow(): void {
        this.element.nativeElement.getBoundingClientRect();
    }
}
