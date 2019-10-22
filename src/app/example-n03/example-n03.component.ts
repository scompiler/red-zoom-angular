import { Component } from '@angular/core';

@Component({
    selector: 'app-example-n03',
    templateUrl: './example-n03.component.html',
    styleUrls: ['./example-n03.component.scss'],
    host: {
        '[class.example]': 'true'
    }
})
export class ExampleN03Component {
    style = 'magnifier';

    constructor() { }
}
