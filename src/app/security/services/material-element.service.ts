import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../../shared/baseurl';
import {Material, MaterialModel} from '../../models/material.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class MaterialElementService {

  constructor(private http: HttpClient) { }

  getMaterial(): Observable<any> {
    return this.http.get(baseURL + 'Material').map((res) => {console.log('ruta: ', baseURL + 'material');
    console.log('material: ', res);
        return res;
      }).catch(error => {
        console.log('error: ' + error);
        return error;
      });
  }
  getMaterialById(id: number): Observable<any> {
    return this.http.get(baseURL + 'Material/' + id).map((res) => {
      console.log('data: ', res);
      return res;
    }).catch(error => {
      console.log('error: ' + error);
      return error;
    });
  }

  getMaterialType(): Observable<any> {
    return this.http.get(baseURL + 'materialType/materialType').map((res) => {
      console.log('data: ', res);
      return res;
    }).catch(error => {
      console.log('error: ' + error);
      return error;
    });
  }
  createMaterial (material: Material): Observable<any> {
    console.log(baseURL);
    return this.http.post(baseURL + 'Material/',material, httpOptions)
      .map(response => response)
      .map((data) => {
        return data;
      })
      .catch(error => {
        console.log('error:' + error);
        return error;
      });
  }

  updateMaterial (material: Material): Observable<any> {
    console.log(baseURL);
    return this.http.put(baseURL + 'Material/'+ material.id, material, httpOptions)
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
