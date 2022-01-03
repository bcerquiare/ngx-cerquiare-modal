import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCerquiareModalBackdropComponent } from './ngx-cerquiare-modal-backdrop.component';

describe('BackdropComponent', () => {
  let component: NgxCerquiareModalBackdropComponent;
  let fixture: ComponentFixture<NgxCerquiareModalBackdropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxCerquiareModalBackdropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCerquiareModalBackdropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
