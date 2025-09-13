import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleN01 } from './example-n01';

describe('ExampleN01', () => {
    let component: ExampleN01;
    let fixture: ComponentFixture<ExampleN01>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ExampleN01]
        }).compileComponents();

        fixture = TestBed.createComponent(ExampleN01);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
