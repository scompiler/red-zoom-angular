import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Code } from './code';

describe('Code', () => {
    let component: Code;
    let fixture: ComponentFixture<Code>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [Code]
        }).compileComponents();

        fixture = TestBed.createComponent(Code);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
