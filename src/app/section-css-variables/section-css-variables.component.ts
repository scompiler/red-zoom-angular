import { Component } from '@angular/core';

@Component({
    selector: 'app-section-css-variables',
    templateUrl: './section-css-variables.component.html',
    styleUrls: ['./section-css-variables.component.scss'],
    host: {
        '[class.section]': 'true'
    }
})
export class SectionCssVariablesComponent {
    constructor() { }
}
