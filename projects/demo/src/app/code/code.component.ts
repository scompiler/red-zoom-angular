import { AfterViewChecked, Component, ElementRef, Input, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import * as hljs from 'highlight.js';

@Component({
    selector: 'app-code',
    templateUrl: './code.component.html',
    styleUrls: ['./code.component.scss']
})
export class CodeComponent implements AfterViewChecked {
    @Input() language: string;

    @ViewChild('template') template: TemplateRef<any>;

    @ViewChild('element') elementRef: ElementRef;

    code: string;

    value: string;

    constructor(
        private renderer: Renderer2,
    ) { }

    ngAfterViewChecked(): void {
        const code = this.template.createEmbeddedView({}).rootNodes.reduce((acc, node) => node.textContent, '');

        if (this.code !== code) {
            this.code = code;

            const lines = code.replace(/(^\s*[\r\n]|[\r\n]\s*$)/g, '').split('\n');
            const minPadding = lines.reduce((acc, line) => {
                const startLength = line.length;
                const endLength = line.replace(/^\s*/, '').length;
                const padding = startLength - endLength;

                if (endLength === 0) {
                    return acc;
                }

                return acc === null ? padding : Math.min(padding, acc);
            }, null) || 0;

            const preparedCode = lines.map(line => line.substr(minPadding)).join('\n');

            this.value = hljs.highlight(this.language, preparedCode).value;
            this.renderer.setProperty(this.elementRef.nativeElement, 'innerHTML', this.value);
        }
    }
}
