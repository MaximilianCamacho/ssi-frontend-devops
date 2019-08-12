import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentTypeListsComponent } from './incident-type-lists.component';

describe('IncidentTypeListsComponent', () => {
  let component: IncidentTypeListsComponent;
  let fixture: ComponentFixture<IncidentTypeListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentTypeListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentTypeListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
