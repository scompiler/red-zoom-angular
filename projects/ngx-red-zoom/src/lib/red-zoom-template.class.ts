import { RedZoomStatus } from './red-zoom-status.type';


const makeTemplate = (() => {
    let template: HTMLTemplateElement = null;

    return () => {
        if (!template) {
            template = document.createElement('template');
            template.innerHTML = `<div class="red-zoom">
                <div class="red-zoom__overlay"></div>
                <div class="red-zoom__frame">
                    <div class="red-zoom__frame-body"></div>
                </div>
                <div class="red-zoom__lens">
                    <div class="red-zoom__lens-body"></div>
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
    template: HTMLDivElement;
    lens: HTMLDivElement;
    lensBody: HTMLDivElement;
    frame: HTMLDivElement;
    frameBody: HTMLDivElement;
    error: HTMLDivElement;
    errorMessage: HTMLDivElement;

    private privateStatus: RedZoomStatus = null;

    private appliedClasses: string[] = [];

    constructor() {
        this.template = makeTemplate();
        this.lens = this.template.querySelector('.red-zoom__lens');
        this.lensBody = this.template.querySelector('.red-zoom__lens-body');
        this.frame = this.template.querySelector('.red-zoom__frame');
        this.frameBody = this.template.querySelector('.red-zoom__frame-body');
        this.error = this.template.querySelector('.red-zoom__error');
        this.errorMessage = this.template.querySelector('.red-zoom__error-message');

        this.template.addEventListener('transitionend', this.onTransitionEnd);
        this.status = 'loading';
    }

    set status(state: RedZoomStatus) {
        if (this.privateStatus !== null) {
            this.template.classList.remove(`red-zoom--status--${this.privateStatus}`);
        }

        this.privateStatus = state;
        this.template.classList.add(`red-zoom--status--${state}`);
    }

    get status(): RedZoomStatus {
        return this.privateStatus;
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
        Object.keys(properties).forEach((name) => {
            this.template.style.setProperty(name, properties[name]);
        });
    }

    detach(): void {
        this.template.classList.remove('red-zoom--active');

        if (this.isHidden) {
            this.template.remove();
        }
    }

    attach(): void {
        if (this.template.parentNode !== document.body) {
            document.body.appendChild(this.template);
        }
    }

    activate(): void {
        this.template.classList.add('red-zoom--active');
    }

    onTransitionEnd = (event: TransitionEvent): void => {
        if (event.propertyName === 'visibility' && this.isHidden) {
            this.template.remove();
        }
    };
}
