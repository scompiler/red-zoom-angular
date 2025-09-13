import {Component, ViewEncapsulation} from '@angular/core';
import {RedZoomDirective} from 'ngx-red-zoom';
import {FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
    selector: 'app-example-n02',
    imports: [
        RedZoomDirective,
        ReactiveFormsModule
    ],
    templateUrl: './example-n02.html',
    styleUrl: './example-n02.scss',
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 'example',
    },
})
export class ExampleN02 {
    mode = new FormControl<string>('square', {nonNullable: true});
}
