import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCssVariablesComponent } from './section-css-variables.component';

describe('SectionCssVariablesComponent', () => {
    let component: SectionCssVariablesComponent;
    let fixture: ComponentFixture<SectionCssVariablesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ SectionCssVariablesComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SectionCssVariablesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
