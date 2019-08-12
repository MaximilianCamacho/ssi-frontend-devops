import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentAgentEditComponent } from './incident-agent-edit.component';

describe('IncidentAgentEditComponent', () => {
  let component: IncidentAgentEditComponent;
  let fixture: ComponentFixture<IncidentAgentEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentAgentEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentAgentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
