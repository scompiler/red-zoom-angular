import { Component, HostBinding } from '@angular/core';
import { UntypedFormControl, ReactiveFormsModule } from '@angular/forms';
import { CodeComponent } from '../code/code.component';
import { RedZoomDirective } from 'ngx-red-zoom';

@Component({
    selector: 'app-example-n03',
    templateUrl: './example-n03.component.html',
    styleUrls: ['./example-n03.component.scss'],
    imports: [
        ReactiveFormsModule,
        CodeComponent,
        RedZoomDirective
    ]
})
export class ExampleN03Component {
    @HostBinding('class.example') classExample = true;

    style: UntypedFormControl = new UntypedFormControl('magnifier');

    constructor() { }
}
