import { Component, HostBinding } from '@angular/core';
import { UntypedFormControl, ReactiveFormsModule } from '@angular/forms';
import { CodeComponent } from '../code/code.component';
import { RedZoomDirective } from 'ngx-red-zoom';

@Component({
    selector: 'app-example-n04',
    templateUrl: './example-n04.component.html',
    styleUrls: ['./example-n04.component.scss'],
    imports: [
        ReactiveFormsModule,
        CodeComponent,
        RedZoomDirective
    ]
})
export class ExampleN04Component {
    @HostBinding('class.example') classExample = true;

    behavior: UntypedFormControl = new UntypedFormControl('hover');

    constructor() { }
}
