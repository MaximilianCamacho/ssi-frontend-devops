import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {baseURL} from '../shared/baseurl';
import {AbstractServiceService} from './abstract-service.service';
import {EmployeeType} from '../models/employee-type.model';
import {catchError, tap} from 'rxjs/operators';
import {MaterialType} from '../models/material-type.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class EmployeeTypeService extends AbstractServiceService {
  constructor(private http: HttpClient) {
    super(http);
  }

  public getEmployeesType(): Observable<any> {
    return this.http.get<any>(baseURL + 'employeeType', {responseType: 'json'})
      .map((data) => {
        return data.data;
      })
      .catch(error => {
        console.log('error:' + error);
        return error;
      });
  }
  public createEmployeeType (employeeType: EmployeeType): Observable<any> {
    console.log('new employeeType:', employeeType);
    return this.http.post(baseURL + 'employeeType/',  employeeType, httpOptions)
      .map(response => response)
      .map((data) => {
        return data;
      })
      .catch(error => {
        console.log('error:' + error);
        return error;
      });
  }
  updateEmployeeType(employeeType: EmployeeType): Observable<EmployeeType> {
    return this.http.put(baseURL + 'employeeType/' + `${employeeType.typeId}`, employeeType, httpOptions).pipe(
      tap(_ => this.log(`updated employeeType id=${employeeType.typeId}`)),
      catchError(this.handleError<any>('updateEmployeeType'))
    );
  }
  public deleteEmployeeType(employeeTypeId: number): Observable<any> {
    return this.http.delete(baseURL + 'employeeType/' + `${employeeTypeId}`, httpOptions).pipe(
      tap(_ => this.log(`delete employeeType id=${employeeTypeId}`)),
      catchError(this.handleError<any>('deleteEmployeeType'))
    );
  }
  public validate(employeeType: EmployeeType): boolean {
    return true;
  }
}
