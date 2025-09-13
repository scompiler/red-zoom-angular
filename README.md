# RedZoom

RedZoom is a modern very easy-to-use image zoom library which made as 
Angular directive and fully stylable via CSS/SCSS.

Examples, documentation, changelog are available [here](https://scompiler.github.io/red-zoom-angular/).

## Getting Started

1. To install RedZoom, run the command below:
   ```bash
   npm install ngx-red-zoom
   ```
2. Import the RedZoomDirective in the component where you want to use it:
   ```typescript
   import { RedZoomDirective } from 'ngx-red-zoom';

   @Component({
       selector: 'app-root',
       imports: [
           RedZoomDirective,
       ],
       templateUrl: './app.html',
       styleUrl: './app.scss',
   })
   export class App { }
   ```
3. Import styles:
   ```scss
   @use 'ngx-red-zoom/styles/base.scss';
   @use 'ngx-red-zoom/styles/style-window.scss';
   ```
4. Add directive to your image tag:
   ```angular2html
   <img
       src="example.jpg"
       redZoom="example.full.jpg"
       redZoomClass="red-zoom--style--window"
   >
   ```
