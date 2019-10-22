import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-example-n04',
    templateUrl: './example-n04.component.html',
    styleUrls: ['./example-n04.component.scss'],
    host: {
        '[class.example]': 'true'
    }
})
export class ExampleN04Component {
    behavior: FormControl = new FormControl('hover');

    constructor() { }
}
