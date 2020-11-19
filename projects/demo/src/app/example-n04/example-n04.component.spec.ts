import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExampleN04Component } from './example-n04.component';

describe('ExampleN04Component', () => {
    let component: ExampleN04Component;
    let fixture: ComponentFixture<ExampleN04Component>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ ExampleN04Component ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ExampleN04Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
