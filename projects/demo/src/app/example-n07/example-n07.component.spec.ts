import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExampleN07Component } from './example-n07.component';

describe('ExampleN07Component', () => {
    let component: ExampleN07Component;
    let fixture: ComponentFixture<ExampleN07Component>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ ExampleN07Component ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ExampleN07Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
