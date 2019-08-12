import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {EmployeeTypeEditComponent} from '../../employee/employee-type-edit/employee-type-edit.component';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {Observable} from 'rxjs/Observable';
import {EmployeeType} from '../../models/employee-type.model';
import {EmployeeTypeAddComponent} from '../../employee/employee-type-add/employee-type-add.component';
import {SharedValuesService} from '../../services/shared-values.service';
import {IncidentType} from '../../models/incident-type.model';
import {IncidentTypeService} from '../../services/incident-type.service';
import {IncidentTypeAddComponent} from '../incident-type-add/incident-type-add.component';
import {IncidentTypeEditComponent} from '../incident-type-edit/incident-type-edit.component';

@Component({
  selector: 'app-incident-type-lists',
  templateUrl: './incident-type-lists.component.html',
  styleUrls: ['./incident-type-lists.component.css']
})
export class IncidentTypeListsComponent implements OnInit {

  incidentTypes$: Observable<IncidentType[]>;
  isLoading = false;
  selectedEmployeeType: IncidentType;
  modalRef: BsModalRef;
  constructor(private incidentTypeService: IncidentTypeService,
              private router: Router,
              private modalService: BsModalService,
              private sharedValuesService: SharedValuesService) {
  }

  ngOnInit() {
    this.getIncidentType();
  }
  home() {
    this.router.navigate(['home']);
  }
  getIncidentType() {
    this.isLoading = true;
    this.incidentTypes$ = this.incidentTypeService.getIncidentTypes();
    console.log('type employee:', this.incidentTypes$);
    this.selectedEmployeeType = undefined;
  }

  select(incidentType: IncidentType) {
    this.selectedEmployeeType = incidentType;
  }

  /*===================================*/
  createIncidentType() {
    this.modalRef = this.modalService.show(IncidentTypeAddComponent, {class: 'modal-md'});
    this.modalRef.content.isModal = true;
    this.modalRef.content.closeEvent.subscribe(
      res => this.closeIncidentType(res)
    );
  }

  updateIncidentType(incidentType: IncidentType) {
    console.log(' edit ', incidentType);
    this.sharedValuesService.setIncidentTypes$(incidentType);
    console.log(' edit ', this.sharedValuesService.setIncidentTypes$(incidentType));
    this.modalRef = this.modalService.show(IncidentTypeEditComponent, {class: 'modal-md'});
    this.modalRef.content.isModal = true;
    this.modalRef.content.closeEvent.subscribe(
      res => this.closeIncidentType(res)
    );
  }

  closeIncidentType(close: boolean): void {
    if (close && this.modalRef) {
      this.modalRef.hide();
      this.modalRef.content.closeEvent.unsubscribe();
      this.getIncidentType();
    }
  }

  deleteIncidentType(id: number) {
    if (confirm('Esta seguro que desea eliminar?')) {
      this.incidentTypeService.deleteIncidentType(id).subscribe(data => {
        // alert('Material type was deleted' + '=>' + id );
        this.router.navigate(['incident-type-lists']);
        /*window.location.reload();*/
        this.getIncidentType();
      });
    }
  }
}
