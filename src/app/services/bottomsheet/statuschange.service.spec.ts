import { TestBed } from '@angular/core/testing';

import { StatuschangeService } from './statuschange.service';

describe('StatuschangeService', () => {
  let service: StatuschangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatuschangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
