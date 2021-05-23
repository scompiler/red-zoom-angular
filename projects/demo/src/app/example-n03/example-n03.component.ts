import { Component, HostBinding } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-example-n03',
    templateUrl: './example-n03.component.html',
    styleUrls: ['./example-n03.component.scss'],
})
export class ExampleN03Component {
    @HostBinding('class.example') classExample = true;

    style: FormControl = new FormControl('magnifier');

    constructor() { }
}
