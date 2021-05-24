import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleN08Component } from './example-n08.component';

describe('ExampleN08Component', () => {
    let component: ExampleN08Component;
    let fixture: ComponentFixture<ExampleN08Component>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ ExampleN08Component ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ExampleN08Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
