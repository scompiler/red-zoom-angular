import { TestBed } from '@angular/core/testing';
import { ExampleN01Component } from './example-n01.component';
import { CodeComponent } from "../code/code.component";

describe('ExampleN01Component', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                ExampleN01Component,
                CodeComponent,
            ],
        }).compileComponents();
    });

    it('should create', () => {
        const fixture = TestBed.createComponent(ExampleN01Component);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
});
