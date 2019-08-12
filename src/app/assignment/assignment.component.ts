import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { AssignmentReportService } from '../security/services/assignment-report.service';
import { MaterialElementService } from '../security/services/material-element.service';
import { EmployeeService } from '../services/employee.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AssignmentService } from '../security/services/assignment.service';
import {BsModalService} from 'ngx-bootstrap';
import { Assignment } from '../models/assignment.model';
import { Material } from '../models/material.model';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  materials: Material [];
  employees: Employee [];
  assignment: Assignment;
  date: Date = new Date();

  constructor(private material: MaterialElementService,
              private router: Router,
              private employee: EmployeeService,
              private assignmentService: AssignmentService, private modalService: BsModalService)
  {
              this.assignment=new Assignment();
  }

  ngOnInit() {
    this.material.getMaterial().subscribe(data => { this.materials = data});
    this.employee.getEmployees().subscribe(data => { this.employees = data});
  }
  home(){
    this.router.navigate(['home']);
  }
  onSubmit() {
    console.log('this assigment:', this.assignment);
    /*console.log('Material:::::::::::::::::::::',this.material);*/
    /*this.assignment.assignmentDate ="2018-06-13";*/
    this.assignment.assignmentDate = this.date;
    /*this.assignment.assignmentF = this.date.getMonth();*/
    this.assignment.employee = this.employeeSelect(this.assignment.employeeId);
    console.log('assignment:employee::::::::::::::::::::', this.assignment.employee);
    this.assignment.material = this.materialSelect(this.assignment.materialId);
    console.log('assignment:material::::::::::::::::::::', this.assignment.material);
    this.assignmentService.saveAssignment(this.assignment).subscribe(
     response=>{
       console.log(response);
       this.assignment = new Assignment();
       this.router.navigate(['assignment-report']);
     },error=>{
       console.log(<any> error)
     }
   );
  }

  materialSelect(idselected : number): Material{
    return this.materials.find(x=>x.id==idselected);
    //console.log(this.materials.find(x=>x.id==idselected));
    }

  employeeSelect(idselected : number): Employee{
      return this.employees.find(x=>x.id==idselected);
      }

    /*createMaterialType() {
    this.modalRef = this.modalService.show(MaterialTypeAddComponent, {class: 'modal-lg'});
    this.modalRef.content.isModal = true;
    this.modalRef.content.closeEvent.subscribe(
      res => this.closeMaterialType(res)
    );
  }
  closeMaterialType(close: boolean): void {
    if (close && this.modalRef) {
      this.modalRef.hide();
      this.modalRef.content.closeEvent.unsubscribe();
    }
  }*/
}
