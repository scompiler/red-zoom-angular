import { Component } from '@angular/core';

@Component({
    selector: 'app-documentation',
    templateUrl: './documentation.component.html',
    styleUrls: ['./documentation.component.scss'],
    host: {
        '[class.section]': 'true'
    }
})
export class DocumentationComponent {
    constructor() { }
}
