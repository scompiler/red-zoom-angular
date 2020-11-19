import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CodeComponent } from './code.component';

describe('CodeComponent', () => {
    let component: CodeComponent;
    let fixture: ComponentFixture<CodeComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ CodeComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CodeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
