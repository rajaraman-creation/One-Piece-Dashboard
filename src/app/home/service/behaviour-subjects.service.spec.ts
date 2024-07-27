import { TestBed } from '@angular/core/testing';

import { BehaviorSubjectsService } from './behaviour-subjects.service';

describe('BehaviorSubjectsService', () => {
  let service: BehaviorSubjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BehaviorSubjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
