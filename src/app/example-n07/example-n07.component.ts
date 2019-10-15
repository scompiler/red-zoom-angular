import { Component, QueryList, ViewChildren } from '@angular/core';
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
        {thumbnail: './assets/image-1.jpg', full: './assets/image-1-full.jpg'},
        {thumbnail: './assets/image-2.jpg', full: './assets/image-2-full.jpg'},
        {thumbnail: './assets/image-3.jpg', full: './assets/image-3-full.jpg'},
    ];

    options = {
        items: 1,
    };

    @ViewChildren(RedZoomDirective) items: QueryList<RedZoomDirective>;

    constructor() { }

    dragged(data): void {
        // if (!data.dragging) {
        //     this.items.forEach(a => a.invalidate());
        // }
        if (data.dragging) {
            this.items.forEach(a => a.disable());
        }
    }

    translated(data): void {
        // this.items.forEach(a => a.invalidate());
    }

    transitionEnd(event: TransitionEvent): void {
        if (event.propertyName === 'transform' && !(event.target as HTMLDivElement).classList.contains('owl-stage')) {
            // this.items.forEach(a => a.invalidate());
            this.items.forEach(a => a.enable());
        }
    }
}
