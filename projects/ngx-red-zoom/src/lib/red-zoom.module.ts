import { NgModule } from '@angular/core';
import { RedZoomDirective } from './red-zoom.directive';


@NgModule({
    imports: [
        RedZoomDirective
    ],
    exports: [
        RedZoomDirective
    ]
})
export class RedZoomModule { }
