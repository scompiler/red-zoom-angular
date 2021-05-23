import { Component, HostBinding } from '@angular/core';

@Component({
    selector: 'app-example-n01',
    templateUrl: './example-n01.component.html',
    styleUrls: ['./example-n01.component.scss'],
})
export class ExampleN01Component {
    @HostBinding('class.example') classExample = true;

    constructor() { }
}
