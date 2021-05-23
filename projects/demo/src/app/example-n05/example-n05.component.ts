import { Component, HostBinding } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-example-n05',
    templateUrl: './example-n05.component.html',
    styleUrls: ['./example-n05.component.scss'],
})
export class ExampleN05Component {
    @HostBinding('class.example') classExample = true;

    url: FormControl = new FormControl('incorrect');

    constructor() { }
}
