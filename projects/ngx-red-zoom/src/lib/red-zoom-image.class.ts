import { RedZoomStatus } from './red-zoom-status.type';
import * as vector from './vector';


export class RedZoomImage {
    private pending = false;

    get width(): number {
        return this.element.width;
    }

    get height(): number {
        return this.element.height;
    }

    get size(): vector.VectorNumber {
        return {x: this.width, y: this.height};
    }

    get naturalWidth(): number {
        return this.element.naturalWidth;
    }

    get naturalHeight(): number {
        return this.element.naturalHeight;
    }

    get naturalSize(): vector.VectorNumber {
        return {x: this.naturalWidth, y: this.naturalHeight};
    }

    get style(): CSSStyleDeclaration {
        return this.element.style;
    }

    set styleSize(value: vector.VectorString) {
        this.element.style.width = value.x;
        this.element.style.height = value.y;
    }

    get status(): RedZoomStatus {
        if (this.pending) {
            return 'pending';
        }

        if (this.element.complete) {
            if (!this.element.src) {
                return 'pending';
            } else if (this.naturalWidth === 0) {
                return 'error';
            }

            return 'loaded';
        }

        return 'loading';
    }

    set src(value: string) {
        this.pending = false;
        this.element.setAttribute('src', value);
    }

    constructor(
        public element: HTMLImageElement = null,
        public listener: () => void = () => {},
        className: string = null,
    ) {
        if (element === null) {
            this.element = document.createElement('img');
        }

        const _listener = () => this.listener();

        this.element.addEventListener('load', _listener);
        this.element.addEventListener('error', _listener);

        this.destroy = () => {
            this.element.removeEventListener('load', _listener);
            this.element.removeEventListener('error', _listener);
        };

        if (className !== null) {
            this.element.classList.add(className);
        }
    }

    reset(): void {
        this.pending = true;
        this.listener();
    }

    destroy: () => void;
}
