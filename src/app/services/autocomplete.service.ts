import {AbstractServiceService} from './abstract-service.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {baseURL} from '../shared/baseurl';
import {Injectable} from '@angular/core';

@Injectable()
export class AutocompleteService extends AbstractServiceService {
  constructor(private http: HttpClient) {
    super(http);
  }
  getEmployees(term): Observable<any> {
    return this.http.get<any>(baseURL + 'Autocomplete/' + term, {responseType: 'json'})
      .map(res => {
        console.log(res);
        return res;
      })
      .catch(error => {
        console.log('error:' + error);
        return error;
      });
  }
}
