import { RedZoomStatus } from './red-zoom-status.type';


export class RedZoomImage {
    private pending = false;

    get width(): number {
        return this.element.width;
    }

    get height(): number {
        return this.element.height;
    }

    get naturalWidth(): number {
        return this.element.naturalWidth;
    }

    get naturalHeight(): number {
        return this.element.naturalHeight;
    }

    get style(): CSSStyleDeclaration {
        return this.element.style;
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
    }

    reset(): void {
        this.pending = true;
        this.listener();
    }

    destroy: () => void;
}
