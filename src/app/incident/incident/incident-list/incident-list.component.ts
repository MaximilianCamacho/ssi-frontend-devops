import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {Incident} from '../../../models/incident.model';
import {IncidentService} from '../../../services/incident.service';
import {IncidentAddComponent} from '../incident-add/incident-add.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-incident-list',
  templateUrl: './incident-list.component.html',
  styleUrls: ['./incident-list.component.css']
})
export class IncidentListComponent implements OnInit {

  incidents$: Observable<Incident[]>;
  modalRef: BsModalRef;

  constructor(private incidentService: IncidentService,
              private  router: Router,
              private modalService: BsModalService) {
  }

  ngOnInit() {
    this.getIncidents();
  }

  getIncidents() {
    this.incidents$ = this.incidentService.getIncidents();
  }

  createIncident() {
    this.modalRef = this.modalService.show(IncidentAddComponent, {class: 'modal-lg'});
    this.modalRef.content.isModal = true;
    this.modalRef.content.closeEvent.subscribe(
      res => this.closeIncident(res)
    );
  }

  deleteIncident(id) {
    this.incidentService.deleteIncident(id).subscribe(res => {
      console.log(res);
      this.router.navigate(['incidents']);
    });
  }

  closeIncident(close: boolean): void {
    if (close && this.modalRef) {
      this.modalRef.hide();
      this.modalRef.content.closeEvent.unsubscribe();
    }
  }

}
