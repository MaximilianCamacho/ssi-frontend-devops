import {Component, EventEmitter, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {IncidentAgent} from '../../models/incident-agent.model';
import {IncidentAgentService} from '../../services/incident-agent.service';

@Component({
  selector: 'app-incident-agent-add',
  templateUrl: './incident-agent-add.component.html',
  styleUrls: ['./incident-agent-add.component.css']
})
export class IncidentAgentAddComponent implements OnInit {

  incidentAgent: IncidentAgent;
  // addForm: FormGroup;
  private isValid: Boolean = true;
  private message: String = '';
  public closeEvent = new EventEmitter<boolean>();

  constructor(private router: Router,
              private fb: FormBuilder,
              private incidentAgentService: IncidentAgentService) {
    this.incidentAgent = new IncidentAgent();
  }

  ngOnInit() {
  }

  onSubmit() {
    this.incidentAgentService.createIncidentAgent(this.incidentAgent).subscribe(
      data => {
        console.log('create', data);
        /*this.router.navigate(['incident-agent-list']);*/
        this.closeIncidentAgent();
        this.router.navigate(['incident-agent-list']);
        window.location.replace('http://localhost:4200/#/incident-agent-list');
      }
    );
  }
  public closeIncidentAgent() {
    this.closeEvent.next(true);
  }

  public saveIncidentAgent(): void {
    this.isValid = this.incidentAgentService.validate(this.incidentAgent);
    if (this.isValid) {
      this.incidentAgentService.createIncidentAgent(this.incidentAgent).subscribe(res => {
        this.router.navigate(['incident-agent-list']);
        this.closeIncidentAgent();
      });
    } else {
      this.message = 'los campos son obligatorios';
    }
  }

}
