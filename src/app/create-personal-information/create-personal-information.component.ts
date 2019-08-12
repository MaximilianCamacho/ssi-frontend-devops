import { Component, OnInit } from '@angular/core';
import {Area} from '../models/area.model';
import {AddAreaService} from '../services/add-area.service';
import {Employee} from '../models/employee.model';
import {BsModalRef} from 'ngx-bootstrap';
import {Observable} from 'rxjs/Observable';
import {EmployeeService} from '../services/employee.service';
import {EmployeeTypeService} from '../services/employee-type.service';
import {Router} from '@angular/router';
import {AreaService} from '../services/area.service';
import {PersonalAddService} from '../services/personal-add.service';


@Component({
  selector: 'app-create-personal-information',
  templateUrl: './create-personal-information.component.html',
  styleUrls: ['./create-personal-information.component.css'],
  providers: [PersonalAddService, AddAreaService, AreaService]
})
export class CreatePersonalInformationComponent implements OnInit {
   employee: Employee;
   area: Area;
   employeeTypes$: [{}];
   listEmployee$: [{}];
   listArea$: [{}];

   areas: Area;
   isValid: Boolean = true;
   message: String = '';




  constructor(private employeeService: EmployeeService ,
              private  personalAddService: PersonalAddService,
              private  router: Router,
              private employeeTypeService: EmployeeTypeService,
              private areaService: AreaService

  ) {
    this.employee = new Employee();
    this.area     = new Area();
  }

  ngOnInit() {
        this.employeeTypeService.getEmployeesType().subscribe(data => {
        console.log('type type', data);
        this.employeeTypes$ = data; });

        this.employeeService.getEmployees().subscribe(data => {
        console.log('list employee', data);
        this.listEmployee$ = data; });


        this.areaService.getAllAreas().subscribe(data => {
        console.log('list area', data);
        this.listArea$ = data; });
   }


  public  saveOrUpdatePeronal(): void {
    if (this.isValid) {
      this.router.navigate(['personal-list']);
      // this.personalAddService.saveOrUpdate(this.areas).subscribe(res => {
      //   this.router.navigate(['area-create']);
      // });
    } else {
      this.message = 'los camos son obligatorios' ;
    }

    sessionStorage.clear();
  }

 }
