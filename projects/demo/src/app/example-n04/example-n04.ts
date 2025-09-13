import { Component } from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {Code} from '../code/code';
import {RedZoomDirective} from 'ngx-red-zoom';

@Component({
    selector: 'app-example-n04',
    imports: [
        ReactiveFormsModule,
        Code,
        RedZoomDirective
    ],
    templateUrl: './example-n04.html',
    styleUrl: './example-n04.scss',
    host: {
        class: 'example',
    },
})
export class ExampleN04 {
    behavior = new FormControl<'hover' | 'grab' | 'click'>('hover', {nonNullable: true});
}
