import {Component, EventEmitter, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {IncidentAgent} from '../../../models/incident-agent.model';
import {IncidentAgentService} from '../../../services/incident-agent.service';

@Component({
  selector: 'app-incident-agent-add',
  templateUrl: './incident-agent-add.component.html',
  styleUrls: ['./incident-agent-add.component.css']
})
export class IncidentAgentAddComponent implements OnInit {
  public closeIncidentAgentEvent = new EventEmitter<boolean>();
  constructor(
    private fb: FormBuilder,
    private incidentAgentService: IncidentAgentService
  ) { }
  createIncidentAgentForm: FormGroup;
  ngOnInit() {
    this.createIncidentAgentForm = this.fb.group(<any> new IncidentAgent());
  }
  public saveIncidentAgent(): void {
    this.incidentAgentService.createIncidentAgent(this.createIncidentAgentForm.value).subscribe(res => {
      console.log(res);
      this.closeIncidentAgent();
    });
  }

  closeIncidentAgent() {
    this.closeIncidentAgentEvent.next(true);
  }
}
