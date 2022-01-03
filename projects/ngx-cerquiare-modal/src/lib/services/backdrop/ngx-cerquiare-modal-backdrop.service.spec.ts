import { TestBed } from '@angular/core/testing';

import { NgxCerquiareModalServiceService } from './ngx-cerquiare-modal-backdrop.service';

describe('NgxCerquiareModalServiceService', () => {
  let service: NgxCerquiareModalServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxCerquiareModalServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
