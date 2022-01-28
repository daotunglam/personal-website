import { TestBed } from '@angular/core/testing';

import { IsInViewPortService } from './is-in-view-port.service';

describe('IsInViewPortService', () => {
  let service: IsInViewPortService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsInViewPortService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
