import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleN03 } from './example-n03';

describe('ExampleN03', () => {
    let component: ExampleN03;
    let fixture: ComponentFixture<ExampleN03>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ExampleN03]
        }).compileComponents();

        fixture = TestBed.createComponent(ExampleN03);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
