import { RedZoomStatus } from './red-zoom-status.type';


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
                <div class="red-zoom__error">
                    <div class="red-zoom__error-message"></div>
                </div>
            </div>`;
        }

        return template.content.cloneNode(true).firstChild as HTMLDivElement;
    };
})();


export class RedZoomTemplate {
    _state: RedZoomStatus = null;

    template: HTMLDivElement;
    window: HTMLDivElement;
    windowBody: HTMLDivElement;
    windowImage: HTMLImageElement;
    lens: HTMLDivElement;
    lensBody: HTMLDivElement;
    lensImage: HTMLImageElement;
    error: HTMLDivElement;
    errorMessage: HTMLDivElement;

    private appliedClasses: string[] = [];

    constructor() {
        this.template = makeTemplate();
        this.window = this.template.querySelector('.red-zoom__window');
        this.windowBody = this.template.querySelector('.red-zoom__window-body');
        this.lens = this.template.querySelector('.red-zoom__lens');
        this.lensBody = this.template.querySelector('.red-zoom__lens-body');
        this.error = this.template.querySelector('.red-zoom__error');
        this.errorMessage = this.template.querySelector('.red-zoom__error-message');

        this.template.addEventListener('transitionend', this.onTransitionEnd);
        this.state = 'pending';
    }

    set state(state: RedZoomStatus) {
        if (this._state !== null) {
            this.template.classList.remove(`red-zoom--state--${this._state}`);
        }

        this._state = state;
        this.template.classList.add(`red-zoom--state--${state}`);
    }

    get state(): RedZoomStatus {
        return this._state;
    }

    set classes(classes: string) {
        this.template.classList.remove(...this.appliedClasses);

        classes = classes.trim();

        if (classes) {
            this.appliedClasses = classes.replace(/ +/, ' ').split(' ');
            this.template.classList.add(...this.appliedClasses);
        }
    }

    get isHidden(): boolean {
        return getComputedStyle(this.template).visibility === 'hidden';
    }

    setProperties(properties: {[name: string]: string}): void {
        for (let name in properties) {
            this.template.style.setProperty(name, properties[name]);
        }
    }

    detach(): void {
        this.template.classList.remove('red-zoom--active');

        if (this.isHidden) {
            this.template.remove();
        }
    }

    attach(): void {
        document.body.appendChild(this.template);
    }

    activate(): void {
        this.template.classList.add('red-zoom--active');
    }

    onTransitionEnd = (event: TransitionEvent) => {
        if (event.propertyName === 'visibility' && this.isHidden) {
            this.template.remove();
        }
    };
}
