import { Component, HostBinding } from '@angular/core';

@Component({
    selector: 'app-example-n08',
    templateUrl: './example-n08.component.html',
    styleUrls: ['./example-n08.component.scss'],
    standalone: false
})
export class ExampleN08Component {
    @HostBinding('class.example') classExample = true;

    constructor() { }
}
