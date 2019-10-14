import { NgModule } from '@angular/core';
import { RedZoomDirective } from './red-zoom.directive';


@NgModule({
    declarations: [
        RedZoomDirective
    ],
    exports: [
        RedZoomDirective
    ]
})
export class RedZoomModule { }
