import { TestBed } from '@angular/core/testing';

import { AddnoteService } from './addnote.service';

describe('AddnoteService', () => {
  let service: AddnoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddnoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
