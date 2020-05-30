import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnotesheetComponent } from './addnotesheet.component';

describe('AddnotesheetComponent', () => {
  let component: AddnotesheetComponent;
  let fixture: ComponentFixture<AddnotesheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnotesheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnotesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
