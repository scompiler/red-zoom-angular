import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-example-n05',
    templateUrl: './example-n05.component.html',
    styleUrls: ['./example-n05.component.scss'],
    host: {
        '[class.example]': 'true'
    }
})
export class ExampleN05Component {
    url: FormControl = new FormControl('incorrect');

    constructor() { }
}
