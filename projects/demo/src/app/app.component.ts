import { Component, OnInit } from '@angular/core';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import * as packageJson from '../../../ngx-red-zoom/package.json';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    version = packageJson.version;
    year = new Date().getFullYear();

    constructor(
        private analytics: Angulartics2GoogleAnalytics,
    ) {}

    ngOnInit(): void {
        this.analytics.startTracking();
    }
}
