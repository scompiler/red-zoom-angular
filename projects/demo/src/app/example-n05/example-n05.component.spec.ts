import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExampleN05Component } from './example-n05.component';

describe('ExampleN05Component', () => {
    let component: ExampleN05Component;
    let fixture: ComponentFixture<ExampleN05Component>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ ExampleN05Component ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ExampleN05Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
