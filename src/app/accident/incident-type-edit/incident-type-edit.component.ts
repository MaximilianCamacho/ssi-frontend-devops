import {Component, EventEmitter, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {BsModalService} from 'ngx-bootstrap';
import {SharedValuesService} from '../../services/shared-values.service';
import {IncidentType} from '../../models/incident-type.model';
import {IncidentTypeService} from '../../services/incident-type.service';

@Component({
  selector: 'app-incident-type-edit',
  templateUrl: './incident-type-edit.component.html',
  styleUrls: ['./incident-type-edit.component.css']
})
export class IncidentTypeEditComponent implements OnInit {

  incidentType: IncidentType;
  private isValid: Boolean = true;
  private  message: String = '';
  public closeEvent = new EventEmitter<boolean>();
  constructor(private incidentTypeService: IncidentTypeService,
              private  router: Router,
              private modalService: BsModalService,
              private sharedValuesService: SharedValuesService) {
    this.incidentType = this.sharedValuesService.incidentTypeValue$; }

  ngOnInit() {
  }
  public updateIncidentType(): void {
    this.isValid = this.incidentTypeService.validate(this.incidentType);
    if (this.isValid) {
      console.log('update incident Type', this.incidentType);
      this.incidentTypeService.updateIncidentType(this.incidentType).subscribe(res => {
        this.router.navigate(['incident-type-lists']);
        this.closeIncidentType();
      });
    } else {
      this.message = 'los camos son obligatorios';
    }
  }
  closeIncidentType() {
    this.closeEvent.next(true);
  }

}
