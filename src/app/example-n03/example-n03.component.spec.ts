import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleN03Component } from './example-n03.component';

describe('ExampleN03Component', () => {
    let component: ExampleN03Component;
    let fixture: ComponentFixture<ExampleN03Component>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ExampleN03Component ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ExampleN03Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
