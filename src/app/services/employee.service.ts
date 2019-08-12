import {Injectable} from '@angular/core';
import {Employee} from '../models/employee.model';
import {Observable} from 'rxjs/Observable';
import {baseURL} from '../shared/baseurl';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {AbstractServiceService} from './abstract-service.service';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class EmployeeService extends AbstractServiceService {

  constructor(private http: HttpClient) {
    super(http);
  }

  getEmployees(): Observable<any> {
    return this.http.get<any>(baseURL + 'employee', {responseType: 'json'})
      .map((data) => {
        console.log('this employee', data);
        return data.data;
      })
      .catch(error => {
        console.log('error:' + error);
        return error;
      });
  }

  updateEmployee(employee: Employee): Observable<any> {
    return this.http.put(baseURL + 'employee/' + `${employee.id}`, employee, httpOptions).pipe(
      tap(_ => this.log(`updated employee id=${employee.id}`)),
      catchError(this.handleError<any>('updateEmployee'))
    );
  }

  getEmployeeById(employeeId): Observable<any> {
    return this.http.get(baseURL + 'employee/' + `${employeeId}`).pipe(
      tap(_ => this.log(`get employee by id=${employeeId}`)),
      catchError(this.handleError<any>('get Employee by Id'))
    );
  }

  public validate(employee: Employee): boolean {
    return true;
  }

  createEmployee (employee: Employee): Observable<any> {
    console.log('new employeeee:', employee);
    return this.http.post(baseURL + 'employee',  employee, httpOptions)
      .map(response => response)
      .map((data) => {
        return data;
      })
      .catch(error => {
        console.log('error:' + error);
        return error;
      });
  }

  deleteEmployee(employeeId: number): Observable<any> {
    return this.http.delete(baseURL + 'employee/' + `${employeeId}`, httpOptions).pipe(
      tap(_ => this.log(`delete employee id=${employeeId}`)),
      catchError(this.handleError<any>('deleteEmployee'))
    );
  }

}
