import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExampleN01Component } from './example-n01.component';

describe('ExampleN01Component', () => {
    let component: ExampleN01Component;
    let fixture: ComponentFixture<ExampleN01Component>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ ExampleN01Component ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ExampleN01Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
