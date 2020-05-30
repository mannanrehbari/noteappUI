import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlinksheetComponent } from './addlinksheet.component';

describe('AddlinksheetComponent', () => {
  let component: AddlinksheetComponent;
  let fixture: ComponentFixture<AddlinksheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddlinksheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddlinksheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
