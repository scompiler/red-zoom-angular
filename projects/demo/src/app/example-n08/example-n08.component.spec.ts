import { TestBed } from '@angular/core/testing';
import { ExampleN08Component } from './example-n08.component';
import { CodeComponent } from "../code/code.component";

describe('ExampleN08Component', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                ExampleN08Component,
                CodeComponent,
            ],
        }).compileComponents();
    });

    it('should create', () => {
        const fixture = TestBed.createComponent(ExampleN08Component);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
});
