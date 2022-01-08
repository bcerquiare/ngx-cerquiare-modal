import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCerquiareModalFooterComponent } from './ngx-cerquiare-modal-footer.component';

describe('NgxCerquiareModalFooterComponent', () => {
  let component: NgxCerquiareModalFooterComponent;
  let fixture: ComponentFixture<NgxCerquiareModalFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxCerquiareModalFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCerquiareModalFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
