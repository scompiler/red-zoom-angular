import { Component, HostBinding } from '@angular/core';
import { CodeComponent } from '../code/code.component';

@Component({
    selector: 'app-example-n08',
    templateUrl: './example-n08.component.html',
    styleUrls: ['./example-n08.component.scss'],
    imports: [
        CodeComponent
    ]
})
export class ExampleN08Component {
    @HostBinding('class.example') classExample = true;

    constructor() { }
}
