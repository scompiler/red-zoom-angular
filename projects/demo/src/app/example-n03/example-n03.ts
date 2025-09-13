import { Component } from '@angular/core';
import {Code} from '../code/code';
import {RedZoomDirective} from 'ngx-red-zoom';
import {FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
    selector: 'app-example-n03',
    imports: [
        Code,
        RedZoomDirective,
        ReactiveFormsModule
    ],
    templateUrl: './example-n03.html',
    styleUrl: './example-n03.scss',
    host: {
        class: 'example',
    },
})
export class ExampleN03 {
    style = new FormControl<string>('magnifier', {nonNullable: true});
}
