import { TestBed } from '@angular/core/testing';
import { ExampleN05Component } from './example-n05.component';
import { CodeComponent } from "../code/code.component";

describe('ExampleN05Component', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                ExampleN05Component,
                CodeComponent,
            ],
        }).compileComponents();
    });

    it('should create', () => {
        const fixture = TestBed.createComponent(ExampleN05Component);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
});

