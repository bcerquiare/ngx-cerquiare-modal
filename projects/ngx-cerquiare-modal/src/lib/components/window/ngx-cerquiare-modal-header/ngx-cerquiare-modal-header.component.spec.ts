import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCerquiareModalHeaderComponent } from './ngx-cerquiare-modal-header.component';

describe('NgxCerquiareModalHeaderComponent', () => {
  let component: NgxCerquiareModalHeaderComponent;
  let fixture: ComponentFixture<NgxCerquiareModalHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxCerquiareModalHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCerquiareModalHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
