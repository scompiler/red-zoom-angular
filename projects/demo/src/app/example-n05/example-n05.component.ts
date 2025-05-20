import { Component, HostBinding } from '@angular/core';
import { UntypedFormControl, ReactiveFormsModule } from '@angular/forms';
import { CodeComponent } from '../code/code.component';
import { RedZoomDirective } from 'ngx-red-zoom';

@Component({
    selector: 'app-example-n05',
    templateUrl: './example-n05.component.html',
    styleUrls: ['./example-n05.component.scss'],
    imports: [
        ReactiveFormsModule,
        CodeComponent,
        RedZoomDirective
    ]
})
export class ExampleN05Component {
    @HostBinding('class.example') classExample = true;

    url: UntypedFormControl = new UntypedFormControl('incorrect');

    constructor() { }
}
