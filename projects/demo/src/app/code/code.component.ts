import { AfterViewChecked, Component, ElementRef, Input, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import hljs from 'highlight.js';

@Component({
    selector: 'app-code',
    templateUrl: './code.component.html',
    styleUrls: ['./code.component.scss'],
    standalone: false
})
export class CodeComponent implements AfterViewChecked {
    @Input() language!: string;

    @ViewChild('template') template!: TemplateRef<void>;

    @ViewChild('element') elementRef!: ElementRef;

    code = '';

    value = '';

    constructor(
        private renderer: Renderer2,
    ) { }

    ngAfterViewChecked(): void {
        const code = this.template.createEmbeddedView(void {}).rootNodes.reduce<string>((acc, node: Node) => node.textContent || '', '');

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

            const preparedCode = lines.map(line => line.substr(minPadding)).join('\n');

            this.value = hljs.highlight(preparedCode, {language: this.language}).value;
            this.renderer.setProperty(this.elementRef.nativeElement, 'innerHTML', this.value);
        }
    }
}
