import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCerquiareModalComponent } from './ngx-cerquiare-modal.component';

describe('NgxCerquiareModalComponent', () => {
  let component: NgxCerquiareModalComponent;
  let fixture: ComponentFixture<NgxCerquiareModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxCerquiareModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCerquiareModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
