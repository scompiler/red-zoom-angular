import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Angulartics2GoogleAnalytics } from 'angulartics2';
import packageJson from '../../../ngx-red-zoom/package.json';
import { render } from 'github-buttons';
import { ExampleN01Component } from './example-n01/example-n01.component';
import { ExampleN02Component } from './example-n02/example-n02.component';
import { ExampleN03Component } from './example-n03/example-n03.component';
import { ExampleN04Component } from './example-n04/example-n04.component';
import { ExampleN05Component } from './example-n05/example-n05.component';
import { ExampleN06Component } from './example-n06/example-n06.component';
import { ExampleN07Component } from './example-n07/example-n07.component';
import { ExampleN08Component } from './example-n08/example-n08.component';
import { DocumentationComponent } from './documentation/documentation.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [
        ExampleN01Component,
        ExampleN02Component,
        ExampleN03Component,
        ExampleN04Component,
        ExampleN05Component,
        ExampleN06Component,
        ExampleN07Component,
        ExampleN08Component,
        DocumentationComponent
    ]
})
export class AppComponent implements OnInit {
    @ViewChild('buttons', {read: ViewContainerRef, static: true}) buttons?: ViewContainerRef;

    version = packageJson.version;
    year = new Date().getFullYear();

    constructor(
        private analytics: Angulartics2GoogleAnalytics,
    ) {}

    ngOnInit(): void {
        this.analytics.startTracking();

        if (this.buttons) {
            const buttons = this.buttons.element.nativeElement as Comment;

            render({
                href: 'https://github.com/scompiler/red-zoom-angular',
                'aria-label': 'Star scompiler/red-zoom-angular on GitHub',
                'data-size': 'large',
                'data-show-count': 'true',
                'data-text': 'Star',
            }, function(el) {
                buttons.parentNode?.insertBefore(el, buttons);
            });
        }
    }
}
