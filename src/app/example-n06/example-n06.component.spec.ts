import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleN06Component } from './example-n06.component';

describe('ExampleN06Component', () => {
    let component: ExampleN06Component;
    let fixture: ComponentFixture<ExampleN06Component>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ExampleN06Component ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ExampleN06Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
