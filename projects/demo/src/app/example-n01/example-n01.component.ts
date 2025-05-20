import { Component, HostBinding } from '@angular/core';
import { RedZoomDirective } from 'ngx-red-zoom';
import { CodeComponent } from '../code/code.component';

@Component({
    selector: 'app-example-n01',
    templateUrl: './example-n01.component.html',
    styleUrls: ['./example-n01.component.scss'],
    imports: [
        RedZoomDirective,
        CodeComponent
    ],
    preserveWhitespaces: true
})
export class ExampleN01Component {
    @HostBinding('class.example') classExample = true;

    constructor() { }
}
