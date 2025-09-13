import { Component } from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {RedZoomDirective} from 'ngx-red-zoom';
import {Code} from '../code/code';

@Component({
    selector: 'app-example-n05',
    imports: [
        ReactiveFormsModule,
        RedZoomDirective,
        Code
    ],
    templateUrl: './example-n05.html',
    styleUrl: './example-n05.scss',
    host: {
        class: 'example',
    },
})
export class ExampleN05 {
    url = new FormControl<string>('incorrect', {nonNullable: true});
}
