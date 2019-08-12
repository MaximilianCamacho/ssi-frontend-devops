import {Component, EventEmitter, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {EmployeeType} from '../../models/employee-type.model';
import {EmployeeTypeService} from '../../services/employee-type.service';

@Component({
  selector: 'app-employee-type-add',
  templateUrl: './employee-type-add.component.html',
  styleUrls: ['./employee-type-add.component.css']
})
export class EmployeeTypeAddComponent implements OnInit {
  employeeType: EmployeeType;
  // addForm: FormGroup;
  private isValid: Boolean = true;
  private message: String = '';
  public closeEvent = new EventEmitter<boolean>();

  constructor(private router: Router,
              private fb: FormBuilder,
              private employeeTypeService: EmployeeTypeService) {
    this.employeeType = new EmployeeType();
  }

  ngOnInit() {
  }

  onSubmit() {
    this.employeeTypeService.createEmployeeType(this.employeeType).subscribe(
      data => {
        console.log('create', data);
        /*this.router.navigate(['employee-type-list']);*/
        this.closeEmployeeType();
        this.router.navigate(['employee-type-list']);
        window.location.replace('http://localhost:4200/#/employee-type-list');
      }
    );
  }
  public closeEmployeeType() {
    this.closeEvent.next(true);
  }

  public saveEmployeeType(): void {
    this.isValid = this.employeeTypeService.validate(this.employeeType);
    if (this.isValid) {
      this.employeeTypeService.createEmployeeType(this.employeeType).subscribe(res => {
        this.router.navigate(['employee-type-list']);
        this.closeEmployeeType();
      });
    } else {
      this.message = 'los campos son obligatorios';
    }
  }
}
