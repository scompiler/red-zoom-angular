import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxRedZoomComponent } from './ngx-red-zoom.component';

describe('NgxRedZoomComponent', () => {
  let component: NgxRedZoomComponent;
  let fixture: ComponentFixture<NgxRedZoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxRedZoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxRedZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
