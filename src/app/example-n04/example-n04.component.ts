import { Component } from '@angular/core';

@Component({
    selector: 'app-example-n04',
    templateUrl: './example-n04.component.html',
    styleUrls: ['./example-n04.component.scss'],
    host: {
        '[class.example]': 'true'
    }
})
export class ExampleN04Component {
    trigger: 'hover'|'click' = 'hover';

    constructor() { }
}
