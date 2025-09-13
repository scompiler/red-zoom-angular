import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleN04 } from './example-n04';

describe('ExampleN04', () => {
    let component: ExampleN04;
    let fixture: ComponentFixture<ExampleN04>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ExampleN04]
        }).compileComponents();

        fixture = TestBed.createComponent(ExampleN04);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
