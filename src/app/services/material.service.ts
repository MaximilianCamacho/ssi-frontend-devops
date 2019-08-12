import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {baseURL} from '../shared/baseurl';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {AbstractServiceService} from './abstract-service.service';
import {Material, MaterialModel} from '../models/material.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class MaterialService extends AbstractServiceService {

  constructor(private http: HttpClient) {
    super(http);
  }

  getMaterial(): Observable<any> {
    return this.http.get<any>(baseURL + 'Material', {responseType: 'json'})
      .map((data) => {
        return data;
      })
      .catch(error => {
        console.log('error:' + error);
        return error;
      });
  }
  /*getMaterial(): Observable<any> {
    return this.http.get(baseURL + 'Material').map((res) => {console.log('ruta: ', baseURL + 'material');
      console.log('material: ', res);
      return res;
    }).catch(error => {
      console.log('error: ' + error);
      return error;
    });
  }*/
  getMaterialById(material: Material): Observable<any> {
    return this.http.get<any>(baseURL + 'material/' + `${material.id}`, {responseType: 'json'})
      .map((data) => {
        return data.data;
      })
      .catch(error => {
        console.log('error:' + error);
        return error;
      });
  }
  updateMaterial(material: MaterialModel): Observable<MaterialModel> {
    return this.http.put(baseURL + 'Material/' + `${material.id}`, material, httpOptions).pipe(
      tap(_ => this.log(`updated material id=${material.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }
  /*createMaterial(material: Material): Observable<Material> {
    return null;
  }*/
  /*createMaterial (material: MaterialModel): Observable<any> {
    console.log('new material:', material);
    return this.http.post(baseURL + 'Material',  material, httpOptions)
      .map(response => response)
      .map((data) => {
        return data;
      })
      .catch(error => {
        console.log('error:' + error);
        return error;
      });
  }*/
  createMaterial (material: MaterialModel): Observable<any> {
    console.log('new material:', material);
    /*return this.http.post(baseURL + 'Material',  material, httpOptions)*/
    /*const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(baseURL + 'Material',  material, { headers: headers })*/
    return this.http.post(baseURL + 'Material',  material, httpOptions)
      .map(response => response)
      .map((data) => {
        return data;
      })
      .catch(error => {
        console.log('error:' + error);
        /*return error;*/
        return Observable.throw(error);
      });
  }
  deleteMaterial(materialId: number): Observable<any> {
    return this.http.delete(baseURL + 'Material/' + `${materialId}`, httpOptions).pipe(
      tap(_ => this.log(`delete material id=${materialId}`)),
      catchError(this.handleError<any>('deleteMaterial'))
    );
  }
  public validate(material: MaterialModel): boolean {
    return true;
  }
}
