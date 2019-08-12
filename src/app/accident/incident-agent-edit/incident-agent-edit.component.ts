import {Component, EventEmitter, OnInit} from '@angular/core';
import {IncidentType} from '../../models/incident-type.model';
import {Router} from '@angular/router';
import {BsModalService} from 'ngx-bootstrap';
import {IncidentTypeService} from '../../services/incident-type.service';
import {SharedValuesService} from '../../services/shared-values.service';
import {IncidentAgent} from '../../models/incident-agent.model';
import {IncidentAgentService} from '../../services/incident-agent.service';

@Component({
  selector: 'app-incident-agent-edit',
  templateUrl: './incident-agent-edit.component.html',
  styleUrls: ['./incident-agent-edit.component.css']
})
export class IncidentAgentEditComponent implements OnInit {

  incidentAgent: IncidentAgent;
  private isValid: Boolean = true;
  private  message: String = '';
  public closeEvent = new EventEmitter<boolean>();
  constructor(private incidentAgentService: IncidentAgentService,
              private  router: Router,
              private modalService: BsModalService,
              private sharedValuesService: SharedValuesService) {
    this.incidentAgent = this.sharedValuesService.incidentAgentValue$; }

  ngOnInit() {
  }
  public updateIncidentAgent(): void {
    this.isValid = this.incidentAgentService.validate(this.incidentAgent);
    if (this.isValid) {
      console.log('update incident Type', this.incidentAgent);
      this.incidentAgentService.updateIncidentAgent(this.incidentAgent).subscribe(res => {
        this.router.navigate(['incident-agent-list']);
        this.closeIncidentAgent();
      });
    } else {
      this.message = 'los camos son obligatorios';
    }
  }
  closeIncidentAgent() {
    this.closeEvent.next(true);
  }

}
