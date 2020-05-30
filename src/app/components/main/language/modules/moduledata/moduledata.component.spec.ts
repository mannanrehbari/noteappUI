import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuledataComponent } from './moduledata.component';

describe('ModuledataComponent', () => {
  let component: ModuledataComponent;
  let fixture: ComponentFixture<ModuledataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuledataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuledataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
