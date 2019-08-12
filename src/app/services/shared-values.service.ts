import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Employee} from '../models/employee.model';
import {MaterialType} from '../models/material-type.model';
import {Material, MaterialModel} from '../models/material.model';
import {EmployeeType} from '../models/employee-type.model';
import {IncidentType} from '../models/incident-type.model';
import {IncidentAgent} from '../models/incident-agent.model';

@Injectable()
export class SharedValuesService {
  private employeeSubject: BehaviorSubject<Employee>;
  private employeeTypeSubject: BehaviorSubject<EmployeeType>;
  private incidentTypeSubject: BehaviorSubject<IncidentType>;
  private incidentAgentSubject: BehaviorSubject<IncidentAgent>;
  private materialTypeSubject: BehaviorSubject<MaterialType>;
  private materialSubject: BehaviorSubject<MaterialModel>;
  constructor() {
    this.employeeSubject = new BehaviorSubject<Employee>(new Employee());
    this.employeeTypeSubject = new BehaviorSubject<EmployeeType>(new EmployeeType());
    this.incidentTypeSubject = new BehaviorSubject<IncidentType>(new IncidentType());
    this.incidentAgentSubject = new BehaviorSubject<IncidentAgent>(new IncidentAgent());
    this.materialTypeSubject = new BehaviorSubject<MaterialType>(new MaterialType());
    this.materialSubject = new BehaviorSubject<MaterialModel>(new MaterialModel());
  }

  get employee$(): Observable<Employee> {
    return this.employeeSubject.asObservable();
  }

  get materialTypes$(): Observable<MaterialType> {
    return this.materialTypeSubject.asObservable();
  }
  public setIncidentTypes$(args: IncidentType): void {
    this.incidentTypeSubject.next(args);
  }
  public setIncidentAgent$(args: IncidentAgent): void {
    this.incidentAgentSubject.next(args);
  }
  public setEmployee$(args: Employee): void {
    this.employeeSubject.next(args);
  }
  public setEmployeeTypes$(args: EmployeeType): void {
    this.employeeTypeSubject.next(args);
  }
  public setMaterial$(args: MaterialModel): void {
    this.materialSubject.next(args);
  }
  public setMaterialTypes$(args: MaterialType): void {
    this.materialTypeSubject.next(args);
  }

  get employeeValue$(): Employee {
    return this.employeeSubject.getValue();
  }
  get employeeTypeValue$(): EmployeeType {
    return this.employeeTypeSubject.getValue();
  }
  get incidentTypeValue$(): IncidentType {
    return this.incidentTypeSubject.getValue();
  }
  get incidentAgentValue$(): IncidentAgent {
    return this.incidentAgentSubject.getValue();
  }
  get materialValue$(): MaterialModel {
    return this.materialSubject.getValue();
  }

  get materialTypeValue$(): MaterialType {
    return this.materialTypeSubject.getValue();
  }
}
