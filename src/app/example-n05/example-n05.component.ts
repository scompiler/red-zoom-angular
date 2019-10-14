import { Component } from '@angular/core';

@Component({
    selector: 'app-example-n05',
    templateUrl: './example-n05.component.html',
    styleUrls: ['./example-n05.component.scss'],
    host: {
        '[class.example]': 'true'
    }
})
export class ExampleN05Component {
    url = './assets/404.jpg';

    constructor() { }
}
