import { Component, HostBinding } from '@angular/core';

@Component({
    selector: 'app-documentation',
    templateUrl: './documentation.component.html',
    styleUrls: ['./documentation.component.scss'],
    standalone: false
})
export class DocumentationComponent {
    @HostBinding('class.section') classSection = true;

    constructor() { }
}
