import { Component, HostBinding } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
    selector: 'app-example-n04',
    templateUrl: './example-n04.component.html',
    styleUrls: ['./example-n04.component.scss'],
    standalone: false
})
export class ExampleN04Component {
    @HostBinding('class.example') classExample = true;

    behavior: UntypedFormControl = new UntypedFormControl('hover');

    constructor() { }
}
