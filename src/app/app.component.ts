import { Component } from '@angular/core';
import * as packageJson from '../../projects/ngx-red-zoom/package.json';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    version = packageJson.version;
    year = new Date().getFullYear();
    image = '../assets/image-1.jpg';
    imageFull = '../assets/image-1-full.jpg';
}
