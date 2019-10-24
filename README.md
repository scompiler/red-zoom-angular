# RedZoom

RedZoom is a modern very easy-to-use image zoom library which made as 
Angular directive and fully stylable via CSS/SCSS.

Examples, documentation, changelog are available [here](https://scompiler.github.io/red-zoom-angular/).

## Getting Started

1. To install RedZoom, run the command below:
   ```bash
   npm install ngx-red-zoom
   ```
2. Import module:
   ```typescript
   import { RedZoomModule } from 'ngx-red-zoom';
   
   @NgModule({
       imports: [
           RedZoomModule
       ]
   })
   export class AppModule { }
   ```
3. Import styles:
   ```scss
   @import '~ngx-red-zoom/styles/base.scss';
   @import '~ngx-red-zoom/styles/style-window.scss';
   ```
4. Add directive to your image tag:
   ```angular2html
   <img
       src="example.jpg"
       redZoom="example.full.jpg"
       redZoomClass="red-zoom--style--window"
   >
   ```
