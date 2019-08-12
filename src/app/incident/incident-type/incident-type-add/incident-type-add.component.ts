import {Component, EventEmitter, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {IncidentType} from '../../../models/incident-type.model';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {IncidentTypeService} from '../../../services/incident-type.service';

@Component({
  selector: 'app-incident-type-add',
  templateUrl: './incident-type-add.component.html',
  styleUrls: ['./incident-type-add.component.css']
})
export class IncidentTypeAddComponent implements OnInit {
  public closeIncidentTypeEvent = new EventEmitter<boolean>();
  modalRef: BsModalRef;
  incidentType: IncidentType;
  constructor(
    private fb: FormBuilder,
    private incidentTypeService: IncidentTypeService
  ) { }
  createIncidentTypeForm: FormGroup;
  ngOnInit() {
    this.createIncidentTypeForm = this.fb.group(<any> new IncidentType());
  }
  public saveIncidentType(): void {
      this.incidentTypeService.createIncidentType(this.createIncidentTypeForm.value).subscribe(res => {
        console.log(res);
        this.closeIncidentType();
      });
  }

  closeIncidentType() {
    this.closeIncidentTypeEvent.next(true);
  }
}
