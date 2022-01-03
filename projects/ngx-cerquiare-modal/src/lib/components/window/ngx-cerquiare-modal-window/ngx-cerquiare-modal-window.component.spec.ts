import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCerquiareModalWindowComponent } from './ngx-cerquiare-modal-window.component';

describe('NgxCerquiareModalWindowComponent', () => {
  let component: NgxCerquiareModalWindowComponent;
  let fixture: ComponentFixture<NgxCerquiareModalWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxCerquiareModalWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCerquiareModalWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
