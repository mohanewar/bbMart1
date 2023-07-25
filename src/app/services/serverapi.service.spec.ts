import { TestBed } from '@angular/core/testing';

import { ServerapiService } from './serverapi.service';

describe('ServerapiService', () => {
  let service: ServerapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
