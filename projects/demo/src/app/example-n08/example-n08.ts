import { Component } from '@angular/core';
import {Code} from '../code/code';

@Component({
    selector: 'app-example-n08',
    imports: [
        Code
    ],
    templateUrl: './example-n08.html',
    styleUrl: './example-n08.scss',
    host: {
        class: 'example',
    },
})
export class ExampleN08 { }
