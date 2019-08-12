import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {baseURL} from '../shared/baseurl';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AbstractServiceService} from './abstract-service.service';
import {IncidentType} from '../models/incident-type.model';
import {IncidentAgent} from '../models/incident-agent.model';
import {catchError, tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class IncidentAgentService extends AbstractServiceService {

  constructor(private http: HttpClient) {
    super(http);
  }

  getIncidentAgents(): Observable<any> {
    return this.http.get<any>(baseURL + 'accidentAgent', {responseType: 'json'})
      .map((data) => {
        return data;
      })
      .catch(error => {
        console.log('error:' + error);
        return error;
      });
  }
  createIncidentAgent(incidentAgent: IncidentAgent): Observable<any> {
    return this.http.post(baseURL + 'accidentAgent', incidentAgent, httpOptions)
      .map(response => response)
      .map((data) => {
        return data;
      })
      .catch(error => {
        console.log('error:' + error);
        return error;
      });
  }
  updateIncidentAgent(incidentAgent: IncidentAgent): Observable<IncidentAgent> {
    return this.http.put(baseURL + 'accidentAgent/' + `${incidentAgent.id}`, incidentAgent, httpOptions).pipe(
      tap(_ => this.log(`updated incident agent id=${incidentAgent.id}`)),
      catchError(this.handleError<any>('updateIncidentAgent'))
    );
  }
  public deleteIncidentAgent(incidentAgentId: number): Observable<any> {
    return this.http.delete(baseURL + 'accidentAgent/' + `${incidentAgentId}`, httpOptions).pipe(
      tap(_ => this.log(`delete accidentAgent id=${incidentAgentId}`)),
      catchError(this.handleError<any>('deleteAccidentAgent'))
    );
  }
  public validate(incidentType: IncidentAgent): boolean {
    return true;
  }
}
