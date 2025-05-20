import { Component, HostBinding, ViewEncapsulation } from '@angular/core';
import { UntypedFormControl, ReactiveFormsModule } from '@angular/forms';
import { RedZoomDirective } from 'ngx-red-zoom';

@Component({
    selector: 'app-example-n02',
    templateUrl: './example-n02.component.html',
    styleUrls: ['./example-n02.component.scss'],
    encapsulation: ViewEncapsulation.None,
    imports: [
        ReactiveFormsModule,
        RedZoomDirective
    ]
})
export class ExampleN02Component {
    @HostBinding('class.example') classExample = true;

    mode: UntypedFormControl = new UntypedFormControl('square');

    constructor() { }
}
