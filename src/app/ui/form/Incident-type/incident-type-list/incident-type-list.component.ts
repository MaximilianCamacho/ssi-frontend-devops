import {Observable} from 'rxjs/Observable';
import {IncidentType} from '../../../../models/incident-type.model';
import {IncidentTypeService} from '../../../../services/incident-type.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-incident-type-list',
  templateUrl: './incident-type-list.component.html',
  styleUrls: ['./incident-type-list.component.css']
})
export class IncidentTypeListComponent implements OnInit {
  incidentTypes$: Observable<IncidentType[]>;
  isLoading = false;
  selectedIncidentType: IncidentType;

  constructor(private incidentTypeService: IncidentTypeService) {
  }

  ngOnInit() {
    this.getIncidentTypes();
  }

  getIncidentTypes() {
    this.isLoading = true;
    this.incidentTypes$ = this.incidentTypeService.getIncidentTypes();
    this.selectedIncidentType = undefined;
  }

  select(incidentType: IncidentType) {
    this.selectedIncidentType = incidentType;
  }
}
