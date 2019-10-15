import { Component } from '@angular/core';

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
        {thumbnail: './assets/image-1.jpg', full: './assets/image-1-full.jpg'},
        {thumbnail: './assets/image-2.jpg', full: './assets/image-2-full.jpg'},
        {thumbnail: './assets/image-3.jpg', full: './assets/image-3-full.jpg'},
    ];
    currentImage = this.images[0];

    constructor() { }
}
