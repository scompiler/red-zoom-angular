import { Component } from '@angular/core';
import {Code} from '../code/code';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {RedZoomDirective} from 'ngx-red-zoom';

@Component({
    selector: 'app-example-n06',
    imports: [
        Code,
        ReactiveFormsModule,
        RedZoomDirective
    ],
    templateUrl: './example-n06.html',
    styleUrl: './example-n06.scss',
    host: {
        class: 'example',
    },
})
export class ExampleN06 {
    images = [
        {thumbnail: './assets/image-6.jpg', full: './assets/image-6-full.jpg'},
        {thumbnail: './assets/image-7.jpg', full: './assets/image-7-full.jpg'},
        {thumbnail: './assets/image-8.jpg', full: './assets/image-8-full.jpg'},
    ];

    currentImage = new FormControl(this.images[0], {nonNullable: true});
}
