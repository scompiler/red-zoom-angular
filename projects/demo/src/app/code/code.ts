import {Component, ElementRef, input, Renderer2, TemplateRef, viewChild} from '@angular/core';
import hljs from 'highlight.js';

@Component({
    selector: 'app-code',
    imports: [],
    templateUrl: './code.html',
    styleUrl: './code.scss'
})
export class Code {
    public readonly language = input.required<string>();

    protected readonly template = viewChild.required('template', {read: TemplateRef});

    protected readonly elementRef = viewChild.required('element', {read: ElementRef});

    protected code = '';

    protected value = '';

    constructor(
        private renderer: Renderer2,
    ) { }

    ngAfterViewChecked(): void {
        const code = this.template().createEmbeddedView(void {}).rootNodes.reduce<string>((_, node: Node) => node.textContent || '', '');

        if (this.code !== code) {
            this.code = code;

            const lines = code.replace(/(^\s*[\r\n]|[\r\n]\s*$)/g, '').split('\n');
            const minPadding = lines.reduce<number|null>((acc, line) => {
                const startLength = line.length;
                const endLength = line.replace(/^\s*/, '').length;
                const padding = startLength - endLength;

                if (endLength === 0) {
                    return acc;
                }

                return acc === null ? padding : Math.min(padding, acc);
            }, null) || 0;

            const preparedCode = lines.map(line => line.substring(minPadding)).join('\n');

            this.value = hljs.highlight(preparedCode, {language: this.language()}).value;
            this.renderer.setProperty(this.elementRef().nativeElement, 'innerHTML', this.value);
        }
    }
}
