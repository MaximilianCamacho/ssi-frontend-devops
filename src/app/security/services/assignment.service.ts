import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { baseURL } from '../../shared/baseurl';
import { Assignment } from '../../models/assignment.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class AssignmentService {

  constructor(private http: HttpClient) { }

  saveAssignment (assignment: Assignment): Observable<any> {
    console.log(baseURL);
    return this.http.post(baseURL + 'assignment', assignment, httpOptions)
      .map(response => response)
      .map((data) => {
        return data;
      })
      .catch(error => {
        console.log('error:' + error);
        return error;
      });
  }
}
