import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleN07 } from './example-n07';

describe('ExampleN07', () => {
    let component: ExampleN07;
    let fixture: ComponentFixture<ExampleN07>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ExampleN07]
        }).compileComponents();

        fixture = TestBed.createComponent(ExampleN07);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
