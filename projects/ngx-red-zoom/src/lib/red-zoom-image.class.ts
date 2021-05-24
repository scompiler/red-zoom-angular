import { RedZoomStatus } from './red-zoom-status.type';
import * as vector from './vector';


export class RedZoomImage {
    element: HTMLImageElement;

    isFirst = true;

    destroy: () => void;

    private loading = false;

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
        if (this.loading) {
            return 'loading';
        }

        if (this.element.complete) {
            if (!this.element.src) {
                return 'loading';
            } else if (this.naturalWidth === 0) {
                return 'error';
            }

            return 'loaded';
        }

        return 'loading';
    }

    set src(value: string) {
        this.loading = false;
        this.element.setAttribute('src', value);
    }

    constructor(
        element: HTMLImageElement|null = null,
        public listener: () => void = () => {},
        className: string|null = null,
    ) {
        this.element = element === null ? document.createElement('img') : element;

        const internalListener = () => {
            if (this.status !== 'loading') {
                this.isFirst = false;
            }

            this.listener();
        };

        this.element.addEventListener('load', internalListener);
        this.element.addEventListener('error', internalListener);

        this.destroy = () => {
            this.element.removeEventListener('load', internalListener);
            this.element.removeEventListener('error', internalListener);
        };

        if (className !== null) {
            this.element.classList.add(className);
        }
    }

    reset(): void {
        this.loading = true;
        this.listener();
    }
}
