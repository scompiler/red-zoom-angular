import {ChangeDetectorRef, Component, viewChild} from '@angular/core';
import {RedZoomDirective} from 'ngx-red-zoom';
import {CarouselModule, SlidesOutputData} from 'ngx-owl-carousel-o';
import {Code} from '../code/code';

@Component({
    selector: 'app-example-n07',
    imports: [
        RedZoomDirective,
        CarouselModule,
        Code,
    ],
    templateUrl: './example-n07.html',
    styleUrl: './example-n07.scss',
    host: {
        class: 'example',
    },
})
export class ExampleN07 {
    images = [
        {thumbnail: './assets/image-9.jpg', full: './assets/image-9-full.jpg'},
        {thumbnail: './assets/image-10.jpg', full: './assets/image-10-full.jpg'},
        {thumbnail: './assets/image-11.jpg', full: './assets/image-11-full.jpg'},
    ];

    currentImage = this.images[0];

    options = {
        items: 1,
    };

    get classes(): string {
        return 'red-zoom--style--window' + (this.dragging ? ' red-zoom--disabled' : '');
    }

    dragging = false;

    constructor(private cd: ChangeDetectorRef) { }

    dragged(event: {dragging: boolean; data: SlidesOutputData}): void {
        this.dragging = event.dragging;
        this.cd.detectChanges();
    }

    translated(event: SlidesOutputData): void {
        if (event.startPosition === undefined) {
            return;
        }

        this.currentImage = this.images[event.startPosition];
    }
}
