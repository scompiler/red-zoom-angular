import { TestBed } from '@angular/core/testing';
import { ExampleN03Component } from './example-n03.component';
import { CodeComponent } from "../code/code.component";

describe('ExampleN03Component', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                ExampleN03Component,
                CodeComponent,
            ],
        }).compileComponents();
    });

    it('should create', () => {
        const fixture = TestBed.createComponent(ExampleN03Component);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
});
