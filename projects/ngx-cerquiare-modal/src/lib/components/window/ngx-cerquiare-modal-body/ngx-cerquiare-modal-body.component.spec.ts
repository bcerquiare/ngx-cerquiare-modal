import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCerquiareModalBodyComponent } from './ngx-cerquiare-modal-body.component';

describe('NgxCerquiareModalBodyComponent', () => {
  let component: NgxCerquiareModalBodyComponent;
  let fixture: ComponentFixture<NgxCerquiareModalBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxCerquiareModalBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCerquiareModalBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
