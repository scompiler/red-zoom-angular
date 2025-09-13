import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleN02 } from './example-n02';

describe('ExampleN02', () => {
    let component: ExampleN02;
    let fixture: ComponentFixture<ExampleN02>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ExampleN02]
        }).compileComponents();

        fixture = TestBed.createComponent(ExampleN02);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
