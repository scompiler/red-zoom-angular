import { TestBed } from '@angular/core/testing';
import { ExampleN06Component } from './example-n06.component';
import { CodeComponent } from "../code/code.component";

describe('ExampleN06Component', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                ExampleN06Component,
                CodeComponent,
            ],
        }).compileComponents();
    });

    it('should create', () => {
        const fixture = TestBed.createComponent(ExampleN06Component);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
});
