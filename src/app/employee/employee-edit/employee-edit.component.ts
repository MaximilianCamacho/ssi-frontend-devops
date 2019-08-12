import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {Employee, gender} from '../../models/employee.model';
import {EmployeeService} from '../../services/employee.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {EmployeeTypeService} from '../../services/employee-type.service';
import {SharedValuesService} from '../../services/shared-values.service';
@Component({
  selector: 'app-edit-employee',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  employee: Employee;
  isValid: Boolean = true;
  message: String = '';
  genders = gender;
  employeeTypes$: [{}];

  public closeEvent = new EventEmitter<boolean>();

  constructor(private employeeService: EmployeeService,
              private  router: Router,
              private employeeTypeService: EmployeeTypeService,
              private _sharedValuesService: SharedValuesService) {

    this.employee = this._sharedValuesService.employeeValue$;
    this.employee.employeeTypeId = this.employee.employeeType.typeId;
  }


  ngOnInit() {
    console.log('employee', this.employee);
    this.employeeTypeService.getEmployeesType().subscribe(data => {
      console.log('type employee', data);
      this.employeeTypes$ = data; });
  }

  public updateEmployee(): void {
    this.isValid = this.employeeService.validate(this.employee);
    if (this.isValid) {
      console.log('update employee', this.employee);
      this.employeeService.updateEmployee(this.employee).subscribe(res => {
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
  /*employee: Employee;
  editForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private employeeService: EmployeeService
  ) {
  }

  ngOnInit(): void {
    const employeeId = localStorage.getItem('employeeId');
    if (!employeeId) {
      console.log('Invalid Action');
      this.router.navigate(['employee-list']);
      return;
    }
    this.editForm = this.fb.group({
      id: [],
      address: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
  }

  onSubmit() {
    this.employeeService.updateEmployee(this.editForm.value).pipe(first()).subscribe(
      data => {
        this.router.navigate(['employee-list']);
      },
      error => {
        console.log(error);
      }
    );
  }*/
}
