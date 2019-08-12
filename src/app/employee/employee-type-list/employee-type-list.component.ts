
import {Observable} from 'rxjs/Observable';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {EmployeeType} from '../../models/employee-type.model';
import {EmployeeTypeService} from '../../services/employee-type.service';
import {Component, OnInit} from '@angular/core';
import {SharedValuesService} from '../../services/shared-values.service';
import {Router} from '@angular/router';
import {EmployeeTypeAddComponent} from '../employee-type-add/employee-type-add.component';
import {EmployeeTypeEditComponent} from '../employee-type-edit/employee-type-edit.component';



@Component({
  selector: 'app-employee-type-list',
  templateUrl: './employee-type-list.component.html',
  styleUrls: ['./employee-type-list.component.css']
})
export class EmployeeTypeListComponent implements OnInit {

  employeeTypes$: Observable<EmployeeType[]>;
  isLoading = false;
  selectedEmployeeType: EmployeeType;
  modalRef: BsModalRef;
  constructor(private employeeTypeService: EmployeeTypeService,
              private router: Router,
              private modalService: BsModalService,
              private sharedValuesService: SharedValuesService) { }

  ngOnInit() {
    this.getEmployeesType();
  }
  home() {
    this.router.navigate(['home']);
  }
  getEmployeesType() {
    this.isLoading = true;
    this.employeeTypes$ = this.employeeTypeService.getEmployeesType();
    console.log('type employee:', this.employeeTypes$);
    this.selectedEmployeeType = undefined;
  }

  select(employeeType: EmployeeType) {
    this.selectedEmployeeType = employeeType;
  }
  /*===================================*/
  createEmployeeType() {
    this.modalRef = this.modalService.show(EmployeeTypeAddComponent, {class: 'modal-md'});
    this.modalRef.content.isModal = true;
    this.modalRef.content.closeEvent.subscribe(
      res => this.closeEmployeeType(res)
    );
  }
  updateEmployeeType(employeeType: EmployeeType) {
    console.log(' edit ', employeeType);
    this.sharedValuesService.setEmployeeTypes$(employeeType);
    console.log(' edit ', this.sharedValuesService.setEmployeeTypes$(employeeType));
    this.modalRef = this.modalService.show(EmployeeTypeEditComponent, {class: 'modal-md'});
    this.modalRef.content.isModal = true;
    this.modalRef.content.closeEvent.subscribe(
      res => this.closeEmployeeType(res)
    );
  }
  closeEmployeeType(close: boolean): void {
    if (close && this.modalRef) {
      this.modalRef.hide();
      this.modalRef.content.closeEvent.unsubscribe();
      this.getEmployeesType();
    }
  }
  deleteEmployeeType(id: number) {
    if ( confirm('Esta seguro que desea eliminar?')) {
      this.employeeTypeService.deleteEmployeeType(id).subscribe(data => {
        // alert('Material type was deleted' + '=>' + id );
        this.router.navigate(['employee-type-list'] );
        /*window.location.reload();*/
        this.getEmployeesType();
      });
    }
  }

}
