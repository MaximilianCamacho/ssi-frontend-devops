import {Component, Input, OnChanges} from '@angular/core';
import {IncidentType} from '../../../../models/incident-type.model';
import {FormBuilder, FormGroup} from '@angular/forms';
import {IncidentTypeService} from '../../../../services/incident-type.service';

@Component({
  selector: 'app-incident-type-detail',
  templateUrl: './incident-type-detail.component.html',
  styleUrls: ['./incident-type-detail.component.css']
})
export class IncidentTypeDetailComponent implements OnChanges {
  @Input() incidentType: IncidentType;
  incidentTypeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private incidentTypeService: IncidentTypeService) {
    this.createForm();
  }

  createForm() {
    this.incidentTypeForm = this.fb.group({
      id: 0,
      name: '',
      description: ''
    });
  }

  ngOnChanges() {
    this.rebuildForm();
  }

  rebuildForm() {
    this.incidentTypeForm.reset({
      name: this.incidentType.name,
      description: this.incidentType.description
    });
  }

  onSubmit() {
    this.incidentType = this.prepareSaveIncidentType();
    this.incidentTypeService.createIncidentType(this.incidentType).subscribe();
    this.rebuildForm();
  }

  prepareSaveIncidentType(): IncidentType {
    const formModel = this.incidentTypeForm.value;
    const saveIncidentType: IncidentType = {
      id: this.incidentType.id,
      name: formModel.name as string,
      description: formModel.description as string
    };
    return saveIncidentType;
  }

  revert() {
    this.rebuildForm();
  }
}
