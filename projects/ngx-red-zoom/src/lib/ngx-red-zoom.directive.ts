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


@Directive({
    selector: '[libNgxRedZoom]',
    exportAs: 'ngxRedZoom',
})
export class NgxRedZoomDirective implements AfterContentInit, OnChanges, OnDestroy {
    @Input('libNgxRedZoom') libNgxRedZoom: string;

    @Input('redZoomLazy') lazy: boolean = false;

    @Input('redZoomClass') classes: string = '';

    @Input('redZoomTrigger') trigger: 'hover' | 'click' = 'hover';

    constructor(
        private element: ElementRef,
        private renderer: Renderer2,
        private zone: NgZone,
        @Inject(DOCUMENT) private document: any,
    ) {

    }

    @Input('src')
    @HostBinding('attr.src')
    src;

    template: HTMLDivElement;
    window: HTMLDivElement;
    windowBody: HTMLDivElement;
    windowImage: HTMLImageElement;
    windowImageLoaded: boolean = false;
    lens: HTMLDivElement;
    lensBody: HTMLDivElement;
    lensImage: HTMLImageElement;
    lensImageLoaded: boolean = false;



    session: Session;

    loaded = false;
    active = false;
    initialized = false;

    appliedClasses: string[] = [];

    @HostListener('load') load() {
        this.loaded = true;
    }

    @HostListener('error') error() {
        this.loaded = false;

        console.log(4);
    }

    ngAfterContentInit(): void {
        this.initialized = true;

        this.zone.runOutsideAngular(() => {
            this.renderer.listen(this.element.nativeElement, 'mouseenter', this.mouseEnter);

            this.template = makeTemplate();
            this.window = this.template.querySelector('.red-zoom__window');
            this.windowBody = this.template.querySelector('.red-zoom__window-body');
            this.lens = this.template.querySelector('.red-zoom__lens');
            this.lensBody = this.template.querySelector('.red-zoom__lens-body');

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
            this.lensImageLoaded = false;

            if (!this.lazy) {
                this.loadLensImage();
            }

            if (this.session) {

            }
        }
        if ('libNgxRedZoom' in changes && !changes.libNgxRedZoom.firstChange) {
            this.windowImageLoaded = false;

            if (!this.lazy) {
                this.loadWindowImage();
            }

            if (this.session) {

            }
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
            this.calcLensSize();
            this.move(this.session.prevMouseX, this.session.prevMouseY);
        }
    }

    mouseEnter = (event: MouseEvent) => {
        this.active = true;

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
            const delta = Math.sign(wheelEvent.deltaY);
        };

        const onMove = (mouseEvent: MouseEvent) => {
            this.onMouseMove(mouseEvent);
        };
        const onLeave = () => {
            this.active = false;
            this.session = null;

            this.template.classList.remove('red-zoom--shown', 'red-zoom--loading');

            if (getComputedStyle(this.template).visibility === 'hidden') {
                this.template.remove();
            }

            unListenMove();
            unListenLeave();
        };

        this.onMouseMove(event);

        const unListenMove = this.renderer.listen(this.element.nativeElement, 'mousemove', onMove);
        const unListenLeave = this.renderer.listen(this.element.nativeElement, 'mouseleave', onLeave);
        const unListenWheel = this.renderer.listen(this.element.nativeElement, 'mousewheel', onWheel);

        this.element.nativeElement.getBoundingClientRect(); // force reflow

        this.template.classList.add('red-zoom--shown');

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

            this.calcLensSize();

            this.lensImage.style.width = `${w}px`;
            this.lensImage.style.height = `${h}px`;
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

        const lensX = Math.round(Math.min(
            thumbnailLeft + thumbnailRect.width - lensW,
            Math.max(
                thumbnailLeft,
                x - lensW / 2
            )
        ));
        const lensY = Math.min(
            thumbnailTop + thumbnailRect.height - lensH,
            Math.max(
                thumbnailTop,
                y - lensH / 2
            )
        );

        this.lens.style.transform = `translateX(${Math.round(lensX) + scrollX}px) translateY(${Math.round(lensY) + scrollY}px) translateZ(0)`;
        this.lensImage.style.transform = `translateX(${Math.round(-lensX + thumbnailLeft)}px) translateY(${Math.floor(-lensY + thumbnailTop)}px) translateZ(0)`;

        const posX = Math.max(
            0,
            Math.min(
                previewImageRect.width - previewContainerRect.width,
                ((lensX - thumbnailLeft) / (thumbnailRect.width - lensW)) * (previewImageRect.width - previewContainerRect.width)
            )
        );
        const posY = Math.max(
            0,
            Math.min(
                previewImageRect.height - previewContainerRect.height,
                ((lensY - thumbnailTop) / (thumbnailRect.height - lensH)) * (previewImageRect.height - previewContainerRect.height)
            )
        );

        this.renderer.setStyle(this.windowImage, 'transform', `translateX(${-posX}px) translateY(${-posY}px)`);
    }

    ngOnDestroy(): void {}

    destroy(): void {

    }
}
