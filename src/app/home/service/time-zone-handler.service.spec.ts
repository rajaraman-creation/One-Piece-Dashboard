import { TestBed } from '@angular/core/testing';

import { TimeZoneHandlerService } from './time-zone-handler.service';

describe('TimeZoneHandlerService', () => {
  let service: TimeZoneHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeZoneHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
