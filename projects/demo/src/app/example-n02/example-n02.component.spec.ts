import { TestBed } from '@angular/core/testing';
import { ExampleN02Component } from './example-n02.component';
import { CodeComponent } from "../code/code.component";

describe('ExampleN02Component', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                ExampleN02Component,
                CodeComponent,
            ],
        }).compileComponents();
    });

    it('should create', () => {
        const fixture = TestBed.createComponent(ExampleN02Component);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
});
