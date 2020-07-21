import { Component } from '@angular/core';

@Component({
    selector: 'app-example-n01',
    templateUrl: './example-n01.component.html',
    styleUrls: ['./example-n01.component.scss'],
    host: {
        '[class.example]': 'true'
    }
})
export class ExampleN01Component {
    constructor() { }
}
