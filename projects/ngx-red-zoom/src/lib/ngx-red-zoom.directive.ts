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
    HostBinding, HostListener, OnDestroy, PLATFORM_ID
} from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { RedZoomTemplate } from './template';


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
}


interface RedZoomImage {
    w: number;
    h: number;
    z: number;
}


@Directive({
    selector: '[redZoom]',
    exportAs: 'redZoom',
})
export class NgxRedZoomDirective implements AfterContentInit, OnChanges, OnDestroy {
    @Input('src') @HostBinding('attr.src') thumbnailSrc: string;

    get thumbnailCurrentSrc(): string {
        return this.element.nativeElement.currentSrc;
    }

    @Input('redZoom') fullSrc: string;

    @Input('redZoomLazy') lazy: boolean = false;

    @Input('redZoomClass') classes: string = '';

    @Input('redZoomTrigger') trigger: 'hover' | 'click' = 'hover';

    @Input('redZoomMouseWheel') wheel: boolean = true;

    @Input('redZoomErrorMessage') errorMessage: string = 'An error occurred while loading the image.';

    constructor(
        private element: ElementRef,
        private renderer: Renderer2,
        private zone: NgZone,
        @Inject(PLATFORM_ID) private platformId: string,
        @Inject(DOCUMENT) private document: any,
    ) { }

    template2: RedZoomTemplate;

    windowBody: HTMLDivElement;
    windowImage: HTMLImageElement;
    windowImageLoaded: boolean = false;
    windowImageError: boolean = false;
    windowImageMeta: RedZoomImage;
    lensBody: HTMLDivElement;
    lensImage: HTMLImageElement;
    lensImageLoaded: boolean = false;
    lensImageError: boolean = false;

    thumbnailImageLoaded: boolean = false;
    thumbnailImageError: boolean = false;

    get imagesLoaded(): boolean {
        return this.windowImageLoaded && this.lensImageLoaded && this.lensImageLoaded;
    }

    triggerListener: () => void  = () => {};

    session: Session;

    @HostListener('load') load() {
        this.thumbnailImageLoaded = true;
        this.afterLoadImages();
    }

    @HostListener('error') error() {
        this.thumbnailImageError = true;
        this.afterErrorImages();
    }

    @HostBinding('draggable') get draggable(): boolean {
        return this.trigger !== 'click';
    }

    listen(): void {
        const startEventName = {
            'hover': 'mouseenter',
            'click': 'mousedown',
        }[this.trigger];
        const endEventName = {
            'hover': 'mouseleave',
            'click': 'mouseup',
        }[this.trigger];

        this.triggerListener();
        this.triggerListener = this.renderer.listen(this.element.nativeElement, startEventName, e => this.mouseEnter(e, endEventName));
    }

    ngAfterContentInit(): void {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }

        this.zone.runOutsideAngular(() => {
            this.listen();

            this.template2 = new RedZoomTemplate();
            this.template2.state = 'pending';
            this.template2.classes = this.classes;
            this.template2.errorMessage.innerHTML = this.errorMessage;


            this.windowBody = this.template2.windowBody;
            this.lensBody = this.template2.lensBody;

            this.windowImage = document.createElement('img');
            this.windowImage.classList.add('red-zoom__window-image');
            this.windowImage.addEventListener('load', this.onWindowImageLoad);
            this.windowImage.addEventListener('error', this.onWindowImageError);

            this.lensImage = document.createElement('img');
            this.lensImage.classList.add('red-zoom__lens-image');
            this.lensImage.addEventListener('load', this.onLensImageLoad);
            this.lensImage.addEventListener('error', this.onLensImageError);

            if (!this.lazy) {
                this.loadWindowImage();
                this.loadLensImage();
            }
        });
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }

        if ('thumbnailSrc' in changes && !changes.thumbnailSrc.firstChange) {
            this.thumbnailImageLoaded = false;
            this.thumbnailImageError = false;
            this.lensImageLoaded = false;
            this.lensImageError = false;

            if (!this.lazy) {
                this.loadLensImage();
            }

            this.updateState();
        }
        if ('fullSrc' in changes && !changes.fullSrc.firstChange) {
            this.windowImageLoaded = false;
            this.windowImageError = false;

            if (!this.lazy) {
                this.loadWindowImage();
            }

            this.updateState();
        }
        if ('trigger' in changes && !changes.trigger.firstChange) {
            this.listen();
        }
        if ('classes' in changes && !changes.classes.firstChange) {
            this.template2.classes = this.classes;

            // TODO: invalidate if session active
        }
        if ('errorMessage' in changes && !changes.errorMessage.firstChange) {
            this.template2.errorMessage.innerHTML = this.errorMessage;
        }


        // TODO: reload preview if changed
    }

    ngOnDestroy(): void {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }

        // TODO: stop session
    }

    loadWindowImage() {
        if (!this.windowImageLoaded) {
            this.windowImage.setAttribute('src', this.fullSrc);
        }
    }

    loadLensImage() {
        if (!this.lensImageLoaded) {
            this.lensImage.setAttribute('src', this.thumbnailSrc);
        }
    }

    onWindowImageLoad = () => {
        // console.log('onWindowImageLoad');
        this.windowImageLoaded = true;

        const originalWidth = this.windowImage.style.width;
        const originalHeight = this.windowImage.style.height;

        // TODO this.windowImage.naturalWidth

        this.windowImage.style.width = 'auto';
        this.windowImage.style.height = 'auto';

        this.windowImageMeta = {
            w: this.windowImage.width,
            h: this.windowImage.height,
            z: 1,
        };

        this.windowImage.style.width = originalWidth;
        this.windowImage.style.height = originalHeight;

        this.template2.setProperties({
            '--red-zoom-preview-w': `${this.windowImageMeta.w}px`,
            '--red-zoom-preview-h': `${this.windowImageMeta.h}px`,
        });

        this.afterLoadImages();
    };

    onWindowImageError = () => {
        this.windowImageError = true;
        this.afterErrorImages();
    };

    onLensImageLoad = () => {
        // console.log('onLensImageLoad');
        this.lensImageLoaded = true;
        this.afterLoadImages();
    };

    onLensImageError = () => {
        this.lensImageError = true;
        this.afterErrorImages();
    };

    afterLoadImages(): void {
        if (this.thumbnailImageLoaded && this.windowImageLoaded && this.lensImageLoaded) {
            this.template2.state = 'loaded';

            if (this.session) {
                this.calcLensSize();
                this.move(this.session.prevMouseX, this.session.prevMouseY);

                this.windowImageMeta.z = this.windowImage.width / this.windowImageMeta.w;
                this.windowImageMeta.z = Math.max(
                    this.windowImageMeta.z,
                    this.session.previewContainerRect.width / this.windowImageMeta.w,
                    this.session.previewContainerRect.height / this.windowImageMeta.h,
                );
            }
        }
    }

    afterErrorImages(): void {
        this.template2.state = 'error';
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
        };

        const onWheel = (wheelEvent: WheelEvent) => {
            if (!wheelEvent.cancelable || !this.imagesLoaded || !this.wheel) {
                return;
            }

            wheelEvent.preventDefault();

            const delta = Math.sign(wheelEvent.deltaY);

            this.windowImageMeta.z += .01 * -delta;

            this.windowImageMeta.z = Math.max(
                this.windowImageMeta.z,
                this.session.previewContainerRect.width / this.windowImageMeta.w,
                this.session.previewContainerRect.height / this.windowImageMeta.h,
            );

            this.windowImage.style.width = `${this.windowImageMeta.w * this.windowImageMeta.z}px`;
            this.windowImage.style.height = `${this.windowImageMeta.h * this.windowImageMeta.z}px`;

            if (this.windowImage.width != Math.round(this.windowImageMeta.w * this.windowImageMeta.z)) {
                this.windowImageMeta.z = this.windowImage.width / this.windowImageMeta.w;
                this.windowImage.style.width = `${this.windowImageMeta.w * this.windowImageMeta.z}px`;
                this.windowImage.style.height = `${this.windowImageMeta.h * this.windowImageMeta.z}px`;
            }
            if (this.windowImage.height != Math.round(this.windowImageMeta.h * this.windowImageMeta.z)) {
                this.windowImageMeta.z = this.windowImage.height / this.windowImageMeta.h;
                this.windowImage.style.width = `${this.windowImageMeta.w * this.windowImageMeta.z}px`;
                this.windowImage.style.height = `${this.windowImageMeta.h * this.windowImageMeta.z}px`;
            }

            this.calcLensSize();
            this.onMouseMove(wheelEvent);
        };

        const onMove = (mouseEvent: MouseEvent) => {
            this.onMouseMove(mouseEvent);
        };
        const onLeave = () => {
            this.session = null;
            this.template2.detach();

            unListenMove();
            unListenLeave();
            unListenWheel();
        };

        const unListenMove = this.renderer.listen(this.element.nativeElement, 'mousemove', onMove);
        const unListenLeave = this.renderer.listen(this.element.nativeElement, endEventName, onLeave);
        const unListenWheel = this.renderer.listen(this.element.nativeElement, 'wheel', onWheel);

        this.onMouseMove(event);

        this.forceReflow();
        this.template2.activate();

        if (!this.windowImageError && !this.lensImageError) {
            if (!this.windowImageLoaded || !this.lensImageLoaded) {
                this.template2.state = 'loading';
                this.loadWindowImage();
                this.loadLensImage();
            }
        } else {
            this.template2.state = 'error';
        }
    };

    onMouseMove = (event: MouseEvent) => {
        if (!this.thumbnailImageLoaded || this.thumbnailImageError) {
            return;
        }

        if (!this.session.active) {
            this.session.active = true;
            this.session.thumbnailRect = this.element.nativeElement.getBoundingClientRect();
            this.session.scrollX = scrollX;
            this.session.scrollY = scrollY;

            // TODO: show preloader if preview doesn't loaded

            const thumbnailRect = this.session.thumbnailRect;

            const x = thumbnailRect.left + scrollX;
            const y = thumbnailRect.top + scrollY;
            const w = thumbnailRect.width;
            const h = thumbnailRect.height;

            this.template2.attach();
            this.windowBody.appendChild(this.windowImage);
            this.lensBody.appendChild(this.lensImage);

            this.template2.setProperties({
                '--red-zoom-thumbnail-x': `${x}px`,
                '--red-zoom-thumbnail-y': `${y}px`,
                '--red-zoom-thumbnail-w': `${w}px`,
                '--red-zoom-thumbnail-h': `${h}px`,
                '--red-zoom-thumbnail-size-max': `${Math.max(w, h)}px`,
                '--red-zoom-thumbnail-size-min': `${Math.min(w, h)}px`,
            });

            this.calcLensSize();

            this.lensImage.style.width = `${w}px`;
            this.lensImage.style.height = `${h}px`;

            if (this.windowImageLoaded && this.lensImageLoaded) {
                this.template2.state = 'loaded';
                this.windowImageMeta.z = this.windowImage.width / this.windowImageMeta.w;
                this.windowImageMeta.z = Math.max(
                    this.windowImageMeta.z,
                    this.session.previewContainerRect.width / this.windowImageMeta.w,
                    this.session.previewContainerRect.height / this.windowImageMeta.h,
                );
            }
        }

        this.session.prevMouseX = event.clientX;
        this.session.prevMouseY = event.clientY;

        if (this.windowImageLoaded && this.lensImageLoaded) {
            this.move(event.clientX, event.clientY);
        }
    };

    calcLensSize(): void {
        this.session.previewContainerRect = this.windowBody.getBoundingClientRect();
        this.session.previewImageRect = this.windowImage.getBoundingClientRect();

        const thumbnailRect = this.session.thumbnailRect;
        const previewContainerRect = this.session.previewContainerRect;
        const previewImageRect = this.session.previewImageRect;

        this.session.lensW = Math.round(thumbnailRect.width * (previewContainerRect.width / previewImageRect.width));
        this.session.lensH = Math.round(thumbnailRect.height * (previewContainerRect.height / previewImageRect.height));

        this.template2.setProperties({
            '--red-zoom-lens-w': `${this.session.lensW}px`,
            '--red-zoom-lens-h': `${this.session.lensH}px`,
        });
    }

    move(x: number, y: number): void {
        const thumbnailRect = this.session.thumbnailRect;
        const previewContainerRect = this.session.previewContainerRect;
        const previewImageRect = this.session.previewImageRect;
        const lensW = this.session.lensW;
        const lensH = this.session.lensH;
        const scrollDeltaX = this.session.scrollX - scrollX;
        const scrollDeltaY = this.session.scrollY - scrollY;
        const thumbnailLeft = thumbnailRect.left + scrollDeltaX;
        const thumbnailTop = thumbnailRect.top + scrollDeltaY;

        this.template2.setProperties({
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

        this.template2.setProperties({
            '--red-zoom-lens-x': `${Math.round(lensX) + scrollX}px`,
            '--red-zoom-lens-y': `${Math.round(lensY) + scrollY}px`,
            '--red-zoom-lens-image-x': `${Math.round(-lensX + thumbnailLeft)}px`,
            '--red-zoom-lens-image-y': `${Math.floor(-lensY + thumbnailTop)}px`,
        });

        const posX = thumbnailRect.width - lensW === 0 ? 0 : Math.max(
            0,
            Math.min(
                previewImageRect.width - previewContainerRect.width,
                ((lensX - thumbnailLeft) / (thumbnailRect.width - lensW)) * (previewImageRect.width - previewContainerRect.width)
            )
        );
        const posX2 = thumbnailRect.width - lensW === 0 ? 0 : ((lensXr - thumbnailLeft) / (thumbnailRect.width - lensW)) * (previewImageRect.width - previewContainerRect.width);
        const posY = thumbnailRect.height - lensH === 0 ? 0 : Math.max(
            0,
            Math.min(
                previewImageRect.height - previewContainerRect.height,
                ((lensY - thumbnailTop) / (thumbnailRect.height - lensH)) * (previewImageRect.height - previewContainerRect.height)
            )
        );
        const posY2 = thumbnailRect.height - lensH === 0 ? 0 : ((lensYr - thumbnailTop) / (thumbnailRect.height - lensH)) * (previewImageRect.height - previewContainerRect.height);

        this.template2.setProperties({
            '--red-zoom-preview-image-x': `${-posX}px`,
            '--red-zoom-preview-image-y': `${-posY}px`,
            '--red-zoom-preview-image-offset-x': `${posX === posX2 ? 0 : posX - posX2}px`,
            '--red-zoom-preview-image-offset-y': `${posY === posY2 ? 0 : posY - posY2}px`,
        });
    }

    destroy(): void {

    }

    updateState(): void {
        if (!this.session) {
            return;
        }

        if (this.windowImageLoaded && this.lensImageLoaded && this.thumbnailImageLoaded) {
            this.template2.state = 'loaded';
        }
    }

    forceReflow(): void {
        this.element.nativeElement.getBoundingClientRect();
    }
}
