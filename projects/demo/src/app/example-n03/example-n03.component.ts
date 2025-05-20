import { Component, HostBinding } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
    selector: 'app-example-n03',
    templateUrl: './example-n03.component.html',
    styleUrls: ['./example-n03.component.scss'],
    standalone: false
})
export class ExampleN03Component {
    @HostBinding('class.example') classExample = true;

    style: UntypedFormControl = new UntypedFormControl('magnifier');

    constructor() { }
}
