import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxRedZoomModule } from 'ngx-red-zoom';
import { Angulartics2Module } from 'angulartics2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleN01Component } from './example-n01/example-n01.component';
import { ExampleN02Component } from './example-n02/example-n02.component';
import { ExampleN03Component } from './example-n03/example-n03.component';
import { SectionCssVariablesComponent } from './section-css-variables/section-css-variables.component';
import { ExampleN04Component } from './example-n04/example-n04.component';
import { ExampleN05Component } from './example-n05/example-n05.component';

@NgModule({
    declarations: [
        AppComponent,
        ExampleN01Component,
        ExampleN02Component,
        ExampleN03Component,
        SectionCssVariablesComponent,
        ExampleN04Component,
        ExampleN05Component,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgxRedZoomModule,
        Angulartics2Module.forRoot(),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
