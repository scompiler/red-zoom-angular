import { TestBed } from '@angular/core/testing';

import { NgxRedZoomService } from './ngx-red-zoom.service';

describe('NgxRedZoomService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxRedZoomService = TestBed.get(NgxRedZoomService);
    expect(service).toBeTruthy();
  });
});
