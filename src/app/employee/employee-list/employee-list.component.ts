import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Employee} from '../../models/employee.model';
import {EmployeeService} from '../../services/employee.service';
import {finalize} from 'rxjs/operators';
import {EmployeeAddComponent} from '../employee-add/employee-add.component';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {EmployeeEditComponent} from '../employee-edit/employee-edit.component';
import {SharedValuesService} from '../../services/shared-values.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-employee',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees$: Observable<Employee[]>;
  isLoading = false;
  // selectedEmployee: Employee;
  modalRef: BsModalRef;

  constructor(private employeeService: EmployeeService,
              private router: Router,
              private modalService: BsModalService,
              private _sharedValuesService: SharedValuesService) {
  }

  ngOnInit() {
    this.getEmployees();
    /*this.employeeService.getEmployees().subscribe(data => {
      console.log('this employee subscribe ', data);
      this.employees$ = data;
      console.log('this employee subscribe ', this.employees$);
    });*/
  }

  getEmployees() {
    this.isLoading = true;
    this.employeeService.getEmployees().subscribe(data => {
      console.log('this employee subscribe ', data);
      this.employees$ = data;
      console.log('this employee subscribe ', this.employees$);
    });
    /*this.employeeService.getEmployees().subscribe(data => {
      console.log('this employee subscribe ', data);
      this.employees$ = data; });*/
    // this.selectedEmployee = undefined;
  }
  home() {
    this.router.navigate(['home']);
  }

 /* select(employee: Employee) {
    this.selectedEmployee = employee;
  }*/

  createEmployee() {
    this.modalRef = this.modalService.show(EmployeeAddComponent, {class: 'modal-lg'});
    this.modalRef.content.isModal = true;
    this.modalRef.content.closeEvent.subscribe(
      res => this.closeEmployee(res)
    );
  }
  closeEmployee(close: boolean): void {
    if (close && this.modalRef) {
      this.modalRef.hide();
      this.modalRef.content.closeEvent.unsubscribe();
      this.getEmployees();
    }
  }

  editEmployee(employee: Employee) {
    console.log(' edit ', employee);
    this._sharedValuesService.setEmployee$(employee);
    this.modalRef = this.modalService.show(EmployeeEditComponent, {class: 'modal-lg'});
    this.modalRef.content.isModal = true;
    this.modalRef.content.closeEvent.subscribe(
      res => this.closeEmployee(res)
    );
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(data => {
      alert('the employee was delete');
    });
  }

}
