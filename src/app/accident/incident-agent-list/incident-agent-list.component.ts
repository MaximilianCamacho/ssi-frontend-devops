import { Component, OnInit } from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {Observable} from 'rxjs/Observable';
import {SharedValuesService} from '../../services/shared-values.service';
import {IncidentAgent} from '../../models/incident-agent.model';
import {IncidentAgentService} from '../../services/incident-agent.service';
import {IncidentAgentAddComponent} from '../incident-agent-add/incident-agent-add.component';
import {IncidentAgentEditComponent} from '../incident-agent-edit/incident-agent-edit.component';

@Component({
  selector: 'app-incident-agent-list',
  templateUrl: './incident-agent-list.component.html',
  styleUrls: ['./incident-agent-list.component.css']
})
export class IncidentAgentListComponent implements OnInit {

  incidentAgent$: Observable<IncidentAgent[]>;
  isLoading = false;
  selectedEmployeeType: IncidentAgent;
  modalRef: BsModalRef;
  constructor(private incidentAgentService: IncidentAgentService,
              private router: Router,
              private modalService: BsModalService,
              private sharedValuesService: SharedValuesService) {
  }

  ngOnInit() {
    this.getIncidentAgent();
  }
  home() {
    this.router.navigate(['home']);
  }
  getIncidentAgent() {
    this.isLoading = true;
    this.incidentAgent$ = this.incidentAgentService.getIncidentAgents();
    console.log('incident agent:', this.incidentAgent$);
    this.selectedEmployeeType = undefined;
  }

  select(incidentAgent: IncidentAgent) {
    this.selectedEmployeeType = incidentAgent;
  }

  /*===================================*/
  createIncidentAgent() {
    this.modalRef = this.modalService.show(IncidentAgentAddComponent, {class: 'modal-md'});
    this.modalRef.content.isModal = true;
    this.modalRef.content.closeEvent.subscribe(
      res => this.closeIncidentAgent(res)
    );
  }

  updateIncidentAgent(incidentAgent: IncidentAgent) {
    console.log(' edit ', incidentAgent);
    this.sharedValuesService.setIncidentAgent$(incidentAgent);
    console.log(' edit ', this.sharedValuesService.setIncidentAgent$(incidentAgent));
    this.modalRef = this.modalService.show(IncidentAgentEditComponent, {class: 'modal-md'});
    this.modalRef.content.isModal = true;
    this.modalRef.content.closeEvent.subscribe(
      res => this.closeIncidentAgent(res)
    );
  }

  closeIncidentAgent(close: boolean): void {
    if (close && this.modalRef) {
      this.modalRef.hide();
      this.modalRef.content.closeEvent.unsubscribe();
      this.getIncidentAgent();
    }
  }

  deleteIncidentAgent(id: number) {
    if (confirm('Esta seguro que desea eliminar?')) {
      this.incidentAgentService.deleteIncidentAgent(id).subscribe(data => {
        // alert('Material type was deleted' + '=>' + id );
        this.router.navigate(['incident-agent-list']);
        /*window.location.reload();*/
        this.getIncidentAgent();
      });
    }
  }

}
