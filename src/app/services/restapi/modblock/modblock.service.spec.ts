import { TestBed } from '@angular/core/testing';

import { ModblockService } from './modblock.service';

describe('ModblockService', () => {
  let service: ModblockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModblockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
