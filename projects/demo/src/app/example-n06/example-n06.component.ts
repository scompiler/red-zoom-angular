import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-example-n06',
    templateUrl: './example-n06.component.html',
    styleUrls: ['./example-n06.component.scss'],
    host: {
        '[class.example]': 'true'
    }
})
export class ExampleN06Component {
    images = [
        {thumbnail: './assets/image-6.jpg', full: './assets/image-6-full.jpg'},
        {thumbnail: './assets/image-7.jpg', full: './assets/image-7-full.jpg'},
        {thumbnail: './assets/image-8.jpg', full: './assets/image-8-full.jpg'},
    ];
    currentImage: FormControl = new FormControl(this.images[0]);

    constructor() { }
}
