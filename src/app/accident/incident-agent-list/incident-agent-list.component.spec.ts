import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentAgentListComponent } from './incident-agent-list.component';

describe('IncidentAgentListComponent', () => {
  let component: IncidentAgentListComponent;
  let fixture: ComponentFixture<IncidentAgentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentAgentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentAgentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
