import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentAgentAddComponent } from './incident-agent-add.component';

describe('IncidentAgentAddComponent', () => {
  let component: IncidentAgentAddComponent;
  let fixture: ComponentFixture<IncidentAgentAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentAgentAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentAgentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
