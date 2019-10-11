import { Component } from '@angular/core';

@Component({
    selector: 'app-example-n02',
    templateUrl: './example-n02.component.html',
    styleUrls: ['./example-n02.component.scss'],
    host: {
        '[class.example]': 'true'
    }
})
export class ExampleN02Component {
    constructor() { }
}
