import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleblocksheetComponent } from './moduleblocksheet.component';

describe('ModuleblocksheetComponent', () => {
  let component: ModuleblocksheetComponent;
  let fixture: ComponentFixture<ModuleblocksheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleblocksheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleblocksheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
