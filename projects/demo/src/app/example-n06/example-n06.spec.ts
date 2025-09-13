import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleN06 } from './example-n06';

describe('ExampleN06', () => {
    let component: ExampleN06;
    let fixture: ComponentFixture<ExampleN06>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ExampleN06]
        }).compileComponents();

        fixture = TestBed.createComponent(ExampleN06);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
