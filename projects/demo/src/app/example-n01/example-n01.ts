import { Component } from '@angular/core';
import {Code} from '../code/code';
import {RedZoomDirective} from 'ngx-red-zoom';

@Component({
    selector: 'app-example-n01',
    imports: [
        Code,
        RedZoomDirective,
    ],
    templateUrl: './example-n01.html',
    styleUrl: './example-n01.scss',
    host: {
        class: 'example',
    },
})
export class ExampleN01 { }
