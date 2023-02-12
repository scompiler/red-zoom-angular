import { TestBed } from '@angular/core/testing';
import { ExampleN07Component } from './example-n07.component';
import { CodeComponent } from "../code/code.component";
import { CarouselModule } from "ngx-owl-carousel-o";

describe('ExampleN07Component', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                ExampleN07Component,
                CodeComponent,
            ],
            imports: [
                CarouselModule,
            ],
        }).compileComponents();
    });

    it('should create', () => {
        const fixture = TestBed.createComponent(ExampleN07Component);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
});
