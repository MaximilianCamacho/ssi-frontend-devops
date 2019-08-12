import {HttpClient, HttpHeaders} from '@angular/common/http';
import {IncidentType} from '../models/incident-type.model';
import {baseURL} from '../shared/baseurl';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {catchError, tap} from 'rxjs/operators';
import {AbstractServiceService} from './abstract-service.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Conteny-Type': 'application/json'
  })
};
@Injectable()
export class IncidentTypeService extends AbstractServiceService{
  constructor(private http: HttpClient) {
    super(http);
  }

  getIncidentTypes(): Observable<any> {
    return this.http.get<any>(baseURL + 'IncidentType', {responseType: 'json'})
      .map((data) => {
        return data;
      })
      .catch(error => {
        console.log('error:' + error);
        return error;
      });
  }

  updateIncidentType(incidentType: IncidentType): Observable<IncidentType> {
    return this.http.put(baseURL + 'IncidentType/' + `${incidentType.id}`, incidentType, httpOptions).pipe(
      tap(_ => this.log(`updated incident id=${incidentType.id}`)),
      catchError(this.handleError<any>('updateIncidentType'))
    );
  }

  createIncidentType(incidentType: IncidentType): Observable<any> {
    return this.http.post(baseURL + 'IncidentType', incidentType, httpOptions)
      .map(response => response)
      .map((data) => {
        return data;
      })
      .catch(error => {
        console.log('error:' + error);
        return error;
      });
  }
  public deleteIncidentType(incidentTypeId: number): Observable<any> {
    return this.http.delete(baseURL + 'IncidentType/' + `${incidentTypeId}`, httpOptions).pipe(
      tap(_ => this.log(`delete incidentType id=${incidentTypeId}`)),
      catchError(this.handleError<any>('deleteIncidentType'))
    );
  }
  public validate(incidentType: IncidentType): boolean {
    return true;
  }
}
