import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RedZoomModule } from 'ngx-red-zoom';
import { Angulartics2Module } from 'angulartics2';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleN01Component } from './example-n01/example-n01.component';
import { ExampleN02Component } from './example-n02/example-n02.component';
import { ExampleN03Component } from './example-n03/example-n03.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { ExampleN04Component } from './example-n04/example-n04.component';
import { ExampleN05Component } from './example-n05/example-n05.component';
import { ExampleN06Component } from './example-n06/example-n06.component';
import { ExampleN07Component } from './example-n07/example-n07.component';
import { ExampleN08Component } from './example-n08/example-n08.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CodeComponent } from './code/code.component';

@NgModule({
    declarations: [
        AppComponent,
        ExampleN01Component,
        ExampleN02Component,
        ExampleN03Component,
        DocumentationComponent,
        ExampleN04Component,
        ExampleN05Component,
        ExampleN06Component,
        ExampleN07Component,
        ExampleN08Component,
        CodeComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RedZoomModule,
        Angulartics2Module.forRoot(),
        CarouselModule,
        NoopAnimationsModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
