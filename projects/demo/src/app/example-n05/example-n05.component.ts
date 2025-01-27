import { Component, HostBinding } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
    selector: 'app-example-n05',
    templateUrl: './example-n05.component.html',
    styleUrls: ['./example-n05.component.scss'],
    standalone: false
})
export class ExampleN05Component {
    @HostBinding('class.example') classExample = true;

    url: UntypedFormControl = new UntypedFormControl('incorrect');

    constructor() { }
}
