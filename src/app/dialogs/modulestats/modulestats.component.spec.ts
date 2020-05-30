import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulestatsComponent } from './modulestats.component';

describe('ModulestatsComponent', () => {
  let component: ModulestatsComponent;
  let fixture: ComponentFixture<ModulestatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulestatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulestatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
