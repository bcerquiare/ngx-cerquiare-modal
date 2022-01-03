import { TestBed } from '@angular/core/testing';

import { NgxCerquiareModalService } from './ngx-cerquiare-modal.service';

describe('NgxCerquiareModalService', () => {
  let service: NgxCerquiareModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxCerquiareModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
