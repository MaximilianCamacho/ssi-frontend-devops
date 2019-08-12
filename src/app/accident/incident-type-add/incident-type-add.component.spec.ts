import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentTypeAddComponent } from './incident-type-add.component';

describe('IncidentTypeAddComponent', () => {
  let component: IncidentTypeAddComponent;
  let fixture: ComponentFixture<IncidentTypeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentTypeAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentTypeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
