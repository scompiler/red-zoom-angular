import { TestBed } from '@angular/core/testing';
import { ExampleN04Component } from './example-n04.component';
import { CodeComponent } from "../code/code.component";

describe('ExampleN04Component', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                ExampleN04Component,
                CodeComponent,
            ],
        }).compileComponents();
    });

    it('should create', () => {
        const fixture = TestBed.createComponent(ExampleN04Component);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
});
