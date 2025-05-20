import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Angulartics2GoogleAnalytics } from "angulartics2";
import { ExampleN01Component } from "./example-n01/example-n01.component";
import { ExampleN02Component } from "./example-n02/example-n02.component";
import { ExampleN03Component } from "./example-n03/example-n03.component";
import { ExampleN04Component } from "./example-n04/example-n04.component";
import { ExampleN05Component } from "./example-n05/example-n05.component";
import { ExampleN06Component } from "./example-n06/example-n06.component";
import { ExampleN07Component } from "./example-n07/example-n07.component";
import { ExampleN08Component } from "./example-n08/example-n08.component";
import { DocumentationComponent } from "./documentation/documentation.component";
import { CodeComponent } from "./code/code.component";
import { CarouselModule } from "ngx-owl-carousel-o";

describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                CarouselModule,
                AppComponent,
                ExampleN01Component,
                ExampleN02Component,
                ExampleN03Component,
                ExampleN04Component,
                ExampleN05Component,
                ExampleN06Component,
                ExampleN07Component,
                ExampleN08Component,
                DocumentationComponent,
                CodeComponent,
            ],
            providers: [
                {provide: Angulartics2GoogleAnalytics, useValue: {startTracking: () => {}}},
            ],
        }).compileComponents();
    });

    it('should create', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
});
