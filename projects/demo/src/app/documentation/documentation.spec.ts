import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Documentation } from './documentation';

describe('Documentation', () => {
    let component: Documentation;
    let fixture: ComponentFixture<Documentation>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [Documentation]
        }).compileComponents();

        fixture = TestBed.createComponent(Documentation);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
