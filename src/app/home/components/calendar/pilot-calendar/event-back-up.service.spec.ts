import { TestBed } from '@angular/core/testing';

import { EventBackUpService } from './event-back-up.service';

describe('EventBackUpService', () => {
  let service: EventBackUpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventBackUpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
