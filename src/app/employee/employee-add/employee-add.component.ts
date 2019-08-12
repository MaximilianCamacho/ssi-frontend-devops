
import {EmployeeService} from '../../services/employee.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Employee, gender} from '../../models/employee.model';
import {Component, EventEmitter, OnInit} from '@angular/core';
import {EmployeeTypeService} from '../../services/employee-type.service';
import {EmployeeType} from '../../models/employee-type.model';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-add-employee',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  employee: Employee;
  isValid: Boolean = true;
  message: String = '';
  genders = gender;
  employeeTypes$: [{}];

  public closeEvent = new EventEmitter<boolean>();

  constructor(private employeeService: EmployeeService,
              private  router: Router,
              private employeeTypeService: EmployeeTypeService) {
    this.employee = new Employee();
  }

  ngOnInit() {
    console.log('type employee', this.genders);
    this.employeeTypeService.getEmployeesType().subscribe(data => {
      console.log('type employee', data);
      this.employeeTypes$ = data; });
  }

  public saveEmployee(): void {
    this.isValid = this.employeeService.validate(this.employee);
    if (this.isValid) {
      this.employeeService.createEmployee(this.employee).subscribe(res => {
        this.router.navigate(['employee-list']);
        this.closeEmployee();
      });
    } else {
      this.message = 'los camos son obligatorios';
    }
  }

  closeEmployee() {
    this.closeEvent.next(true);
  }
}
