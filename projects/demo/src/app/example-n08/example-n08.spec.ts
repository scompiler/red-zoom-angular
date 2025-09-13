import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleN08 } from './example-n08';

describe('ExampleN08', () => {
    let component: ExampleN08;
    let fixture: ComponentFixture<ExampleN08>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ExampleN08]
        }).compileComponents();

        fixture = TestBed.createComponent(ExampleN08);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
