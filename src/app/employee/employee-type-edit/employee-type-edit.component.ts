import {Component, EventEmitter, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {BsModalService} from 'ngx-bootstrap';
import {MaterialTypeService} from '../../services/material-type.service';
import {SharedValuesService} from '../../services/shared-values.service';
import {MaterialType} from '../../models/material-type.model';
import {EmployeeType} from '../../models/employee-type.model';
import {EmployeeTypeService} from '../../services/employee-type.service';

@Component({
  selector: 'app-employee-type-edit',
  templateUrl: './employee-type-edit.component.html',
  styleUrls: ['./employee-type-edit.component.css']
})
export class EmployeeTypeEditComponent implements OnInit {
  employeeType: EmployeeType;
  private isValid: Boolean = true;
  private  message: String = '';
  public closeEvent = new EventEmitter<boolean>();
  constructor(private employeeTypeService: EmployeeTypeService,
              private  router: Router,
              private modalService: BsModalService,
              private sharedValuesService: SharedValuesService) {
    this.employeeType = this.sharedValuesService.employeeTypeValue$; }

  ngOnInit() {
  }
  public updateEmployeeType(): void {
    this.isValid = this.employeeTypeService.validate(this.employeeType);
    if (this.isValid) {
      console.log('update employee Type', this.employeeType);
      this.employeeTypeService.updateEmployeeType(this.employeeType).subscribe(res => {
        this.router.navigate(['employee-type-list']);
        this.closeEmployeeType();
      });
    } else {
      this.message = 'los camos son obligatorios';
    }
  }
  closeEmployeeType() {
    this.closeEvent.next(true);
  }

}
