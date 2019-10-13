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
    HostBinding, HostListener, OnDestroy
} from '@angular/core';
import { DOCUMENT } from '@angular/common';


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

const makeTemplate = (() => {
    let template: HTMLTemplateElement = null;

    return () => {
        if (!template) {
            template = document.createElement('template');
            template.innerHTML = `<div class="red-zoom">
                <div class="red-zoom__overlay"></div>
                <div class="red-zoom__lens">
                    <div class="red-zoom__lens-body"></div>
                </div>
                <div class="red-zoom__window">
                    <div class="red-zoom__window-body"></div>
                </div>
            </div>`;
        }

        return template.content.cloneNode(true).firstChild as HTMLDivElement;
    };
})();


interface RedZoomImage {
    w: number;
    h: number;
    z: number;
}


class RedZoomTemplate {
    template: HTMLDivElement;
    window: HTMLDivElement;
    windowBody: HTMLDivElement;
    windowImage: HTMLImageElement;
    lens: HTMLDivElement;
    lensBody: HTMLDivElement;
    lensImage: HTMLImageElement;

    constructor() {
        this.template = makeTemplate();
        this.window = this.template.querySelector('.red-zoom__window');
        this.windowBody = this.template.querySelector('.red-zoom__window-body');
        this.lens = this.template.querySelector('.red-zoom__lens');
        this.lensBody = this.template.querySelector('.red-zoom__lens-body');
    }
}


@Directive({
    selector: '[libNgxRedZoom]',
    exportAs: 'ngxRedZoom',
})
export class NgxRedZoomDirective implements AfterContentInit, OnChanges, OnDestroy {
    @Input('libNgxRedZoom') libNgxRedZoom: string;

    @Input('redZoomLazy') lazy: boolean = false;

    @Input('redZoomClass') classes: string = '';

    @Input('redZoomTrigger') trigger: 'hover' | 'click' = 'hover';

    @Input('redZoomMouseWheel') wheel: boolean = true;

    constructor(
        private element: ElementRef,
        private renderer: Renderer2,
        private zone: NgZone,
        @Inject(DOCUMENT) private document: any,
    ) { }

    @Input('src')
    @HostBinding('attr.src')
    src;

    template2: RedZoomTemplate;

    template: HTMLDivElement;
    window: HTMLDivElement;
    windowBody: HTMLDivElement;
    windowImage: HTMLImageElement;
    windowImageLoaded: boolean = false;
    windowImageMeta: RedZoomImage;
    lens: HTMLDivElement;
    lensBody: HTMLDivElement;
    lensImage: HTMLImageElement;
    lensImageLoaded: boolean = false;

    thumbnailImageLoaded: boolean = false;

    get imagesLoaded(): boolean {
        return this.windowImageLoaded && this.lensImageLoaded && this.lensImageLoaded;
    }


    triggerListener: () => void  = () => {};


    session: Session;

    loaded = false;
    initialized = false;

    appliedClasses: string[] = [];

    @HostListener('load') load() {
        this.thumbnailImageLoaded = true;



        this.loaded = true;
    }

    @HostListener('error') error() {
        this.loaded = false;
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
        this.initialized = true;

        this.zone.runOutsideAngular(() => {
            this.listen();

            this.template2 = new RedZoomTemplate();


            this.template = this.template2.template;
            this.window = this.template2.window;
            this.windowBody = this.template2.windowBody;
            this.lens = this.template2.lens;
            this.lensBody = this.template2.lensBody;

            this.windowImage = document.createElement('img');
            this.windowImage.classList.add('red-zoom__window-image');
            this.windowImage.addEventListener('load', this.onWindowImageLoad);

            this.lensImage = document.createElement('img');
            this.lensImage.classList.add('red-zoom__lens-image');
            this.lensImage.addEventListener('load', this.onLensImageLoad);

            if (this.classes.trim()) {
                this.template.classList.add(...this.classes.trim().replace(/ +/, ' ').split(' '));
            }

            this.template.addEventListener('transitionend', this.onTransitionEnd);

            if (!this.lazy) {
                this.loadWindowImage();
                this.loadLensImage();
            }
        });
    }

    ngOnChanges(changes: SimpleChanges): void {
        if ('src' in changes && !changes.src.firstChange) {
            this.thumbnailImageLoaded = false;
            this.lensImageLoaded = false;

            if (!this.lazy) {
                this.loadLensImage();
            }

            this.updateState();
        }
        if ('libNgxRedZoom' in changes && !changes.libNgxRedZoom.firstChange) {
            this.windowImageLoaded = false;

            if (!this.lazy) {
                this.loadWindowImage();
            }

            this.updateState();
        }
        if ('trigger' in changes && !changes.trigger.firstChange) {
            this.listen();
        }
        if ('classes' in changes && !changes.classes.firstChange) {
            this.template.classList.remove(...changes.classes.previousValue.trim().replace(/ +/, ' ').split(' '));
            this.template.classList.add(...changes.classes.currentValue.trim().replace(/ +/, ' ').split(' '));

            // TODO: invalidate if session active
        }


        // TODO: reload preview if changed
    }

    loadWindowImage() {
        if (!this.windowImageLoaded) {
            this.windowImage.setAttribute('src', this.libNgxRedZoom);
        }
    }

    loadLensImage() {
        if (!this.lensImageLoaded) {
            this.lensImage.setAttribute('src', this.src);
        }
    }

    onWindowImageLoad = () => {
        console.log('onWindowImageLoad');
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

        this.template.style.setProperty('--red-zoom-preview-w', `${this.windowImageMeta.w}px`);
        this.template.style.setProperty('--red-zoom-preview-h', `${this.windowImageMeta.h}px`);

        this.afterLoadImages();
    };

    onLensImageLoad = () => {
        console.log('onLensImageLoad');
        this.lensImageLoaded = true;
        this.afterLoadImages();
    };

    onTransitionEnd = (event: TransitionEvent) => {
        if (event.propertyName === 'visibility' && getComputedStyle(this.template).visibility === 'hidden') {
            this.template.remove();
        }
    };

    afterLoadImages(): void {
        if (this.session && this.windowImageLoaded && this.lensImageLoaded) {
            this.template.classList.remove('red-zoom--loading');
            this.template.classList.add('red-zoom--loaded');
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

            this.template.classList.remove('red-zoom--active', 'red-zoom--loading', 'red-zoom--loaded', 'red-zoom--error');

            if (getComputedStyle(this.template).visibility === 'hidden') {
                this.template.remove();
            }

            unListenMove();
            unListenLeave();
            unListenWheel();
        };

        this.onMouseMove(event);

        const unListenMove = this.renderer.listen(this.element.nativeElement, 'mousemove', onMove);
        const unListenLeave = this.renderer.listen(this.element.nativeElement, endEventName, onLeave);
        const unListenWheel = this.renderer.listen(this.element.nativeElement, 'mousewheel', onWheel);

        this.element.nativeElement.getBoundingClientRect(); // force reflow

        this.template.classList.add('red-zoom--active');

        if (!this.windowImageLoaded || !this.lensImageLoaded) {
            this.template.classList.add('red-zoom--loading');
            this.loadWindowImage();
            this.loadLensImage();
        }
    };

    onMouseMove = (event: MouseEvent) => {
        if (!this.loaded) {
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


            this.document.body.appendChild(this.template);
            this.windowBody.appendChild(this.windowImage);
            this.lensBody.appendChild(this.lensImage);

            this.template.style.setProperty('--red-zoom-thumbnail-x', `${x}px`);
            this.template.style.setProperty('--red-zoom-thumbnail-y', `${y}px`);
            this.template.style.setProperty('--red-zoom-thumbnail-w', `${w}px`);
            this.template.style.setProperty('--red-zoom-thumbnail-h', `${h}px`);
            this.template.style.setProperty('--red-zoom-thumbnail-size-max', `${Math.max(w, h)}px`);
            this.template.style.setProperty('--red-zoom-thumbnail-size-min', `${Math.min(w, h)}px`);

            this.calcLensSize();

            this.lensImage.style.width = `${w}px`;
            this.lensImage.style.height = `${h}px`;

            if (this.windowImageLoaded && this.lensImageLoaded) {
                this.template.classList.remove('red-zoom--loading');
                this.template.classList.add('red-zoom--loaded');
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

        this.lens.style.width = `${this.session.lensW}px`;
        this.lens.style.height = `${this.session.lensH}px`;
        this.lens.style.left = `0px`;
        this.lens.style.top = `0px`;
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

        this.template.style.setProperty('--red-zoom-mouse-x', `${x + scrollX}px`);
        this.template.style.setProperty('--red-zoom-mouse-y', `${y + scrollY}px`);

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

        this.template.style.setProperty('--red-zoom-lens-x', `${Math.round(lensX) + scrollX}px`);
        this.template.style.setProperty('--red-zoom-lens-y', `${Math.round(lensY) + scrollY}px`);
        this.template.style.setProperty('--red-zoom-lens-image-x', `${Math.round(-lensX + thumbnailLeft)}px`);
        this.template.style.setProperty('--red-zoom-lens-image-y', `${Math.floor(-lensY + thumbnailTop)}px`);

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

        this.template.style.setProperty('--red-zoom-preview-image-x', `${-posX}px`);
        this.template.style.setProperty('--red-zoom-preview-image-y', `${-posY}px`);
        this.template.style.setProperty('--red-zoom-preview-image-offset-x', `${posX === posX2 ? 0 : posX - posX2}px`);
        this.template.style.setProperty('--red-zoom-preview-image-offset-y', `${posY === posY2 ? 0 : posY - posY2}px`);
    }

    ngOnDestroy(): void {
        // TODO: stop session
    }

    destroy(): void {

    }

    updateState(): void {
        console.log(54);
        if (!this.session) {
            return;
        }

        if (this.windowImageLoaded && this.lensImageLoaded && this.thumbnailImageLoaded) {
            this.template.classList.remove('red-zoom--loading');
            this.template.classList.add('red-zoom--loaded');
        }
    }
}
