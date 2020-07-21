import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-example-n03',
    templateUrl: './example-n03.component.html',
    styleUrls: ['./example-n03.component.scss'],
    host: {
        '[class.example]': 'true'
    }
})
export class ExampleN03Component {
    style: FormControl = new FormControl('magnifier');

    constructor() { }
}
