import {Component, EventEmitter, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {IncidentType} from '../../models/incident-type.model';
import {IncidentTypeService} from '../../services/incident-type.service';

@Component({
  selector: 'app-incident-type-add',
  templateUrl: './incident-type-add.component.html',
  styleUrls: ['./incident-type-add.component.css']
})
export class IncidentTypeAddComponent implements OnInit {

  incidentType: IncidentType;
  // addForm: FormGroup;
  private isValid: Boolean = true;
  private message: String = '';
  public closeEvent = new EventEmitter<boolean>();

  constructor(private router: Router,
              private fb: FormBuilder,
              private incidentTypeService: IncidentTypeService) {
    this.incidentType = new IncidentType();
  }

  ngOnInit() {
  }

  onSubmit() {
    this.incidentTypeService.createIncidentType(this.incidentType).subscribe(
      data => {
        console.log('create', data);
        /*this.router.navigate(['incident-type-lists']);*/
        this.closeIncidentType();
        /*this.router.navigate(['incident-type-lists']);*/
        window.location.replace('http://localhost:4200/#/incident-type-lists');
      }
    );
  }
  public closeIncidentType() {
    this.closeEvent.next(true);
  }

  public saveIncidentType(): void {
    this.isValid = this.incidentTypeService.validate(this.incidentType);
    if (this.isValid) {
      this.incidentTypeService.createIncidentType(this.incidentType).subscribe(res => {
        this.router.navigate(['incident-type-lists']);
        this.closeIncidentType();
      });
    } else {
      this.message = 'los campos son obligatorios';
    }
  }
}
