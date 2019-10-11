import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxRedZoomModule } from 'ngx-red-zoom';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleN01Component } from './example-n01/example-n01.component';
import { ExampleN02Component } from './example-n02/example-n02.component';
import { ExampleN03Component } from './example-n03/example-n03.component';
import { SectionCssVariablesComponent } from './section-css-variables/section-css-variables.component';

@NgModule({
    declarations: [
        AppComponent,
        ExampleN01Component,
        ExampleN02Component,
        ExampleN03Component,
        SectionCssVariablesComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgxRedZoomModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
