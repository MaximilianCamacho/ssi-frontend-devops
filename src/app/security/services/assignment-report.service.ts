import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../../shared/baseurl';

@Injectable()
export class AssignmentReportService {

  constructor(private http: HttpClient) { }

  getAssignment(): Observable<any> {
    return this.http.get(baseURL + 'assignment').map((res) => {
        return res;
      }).catch(error => {
        console.log('error: ' + error);
        return error;
      });
  }
}
