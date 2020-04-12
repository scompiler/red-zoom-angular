import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { RedZoomDirective } from 'ngx-red-zoom';

@Component({
    selector: 'app-example-n07',
    templateUrl: './example-n07.component.html',
    styleUrls: ['./example-n07.component.scss'],
    host: {
        '[class.example]': 'true'
    }
})
export class ExampleN07Component {
    images = [
        {thumbnail: './assets/image-9.jpg', full: './assets/image-9-full.jpg'},
        {thumbnail: './assets/image-10.jpg', full: './assets/image-10-full.jpg'},
        {thumbnail: './assets/image-11.jpg', full: './assets/image-11-full.jpg'},
    ];

    currentImage = this.images[0];

    options = {
        items: 1,
    };

    @ViewChild(RedZoomDirective) redZoom: RedZoomDirective;

    get classes(): string {
        return 'red-zoom--style--window' + (this.dragging ? ' red-zoom--disabled' : '');
    }

    dragging = false;

    constructor(private cd: ChangeDetectorRef) { }

    dragged(data): void {
        this.dragging = data.dragging;
        this.cd.detectChanges();
    }

    translated(data): void {
        this.currentImage = this.images[data.startPosition];
    }
}
