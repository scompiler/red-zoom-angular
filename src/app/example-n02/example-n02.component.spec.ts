import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleN02Component } from './example-n02.component';

describe('ExampleN02Component', () => {
    let component: ExampleN02Component;
    let fixture: ComponentFixture<ExampleN02Component>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ExampleN02Component ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ExampleN02Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
