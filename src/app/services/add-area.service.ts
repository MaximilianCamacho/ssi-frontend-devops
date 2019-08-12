import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Area} from '../models/area.model';
import {Observable} from 'rxjs';
import {isValid} from 'ngx-bootstrap/chronos/create/valid';
import {baseURL} from '../shared/baseurl';
import {catchError, tap} from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class AddAreaService {

  constructor(private http: HttpClient) {
  }

  public validate(areas: Area): boolean {
    return true;
  }


  public saveOrUpdate (area: Area): Observable<any> {
    console.log('hola '+ area);
    return this.http.post('http://localhost:8080/area',  JSON.stringify(area), httpOptions)
      .map(response => response)
      .map((data) => {
        return data;
      })
      .catch(error => {
        console.log('error:' + error);
        return error;
      });
  }




  public delete (areas: Area): Observable<any> {
    console.log(areas);
    console.log('valorDelte');
    console.log('http://localhost:8080/area/' + `${areas.id}`);
    return this.http.delete('http://localhost:8080/area/' + `${areas.id}` )
      .map(response => response)
      .map((data) => {
        return data;
      })
      .catch(error => {
        console.log('error:' + error);
        return error;
      });
    // sessionStorage.clear();
  }











}
