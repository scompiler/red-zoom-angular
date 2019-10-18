import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-example-n02',
    templateUrl: './example-n02.component.html',
    styleUrls: ['./example-n02.component.scss'],
    encapsulation: ViewEncapsulation.None,
    host: {
        '[class.example]': 'true'
    }
})
export class ExampleN02Component {
    mode: FormControl = new FormControl('square');

    constructor() { }
}
