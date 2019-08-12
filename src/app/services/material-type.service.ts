import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {baseURL} from '../shared/baseurl';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {AbstractServiceService} from './abstract-service.service';
import {MaterialType} from '../models/material-type.model';
import {Employee} from '../models/employee.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class MaterialTypeService extends AbstractServiceService {

  constructor(private http: HttpClient) {
    super(http);
  }

  getAllMaterialType(): Observable<any> {
    return this.http.get<any>(baseURL + 'materialType/materialType', {responseType: 'json'})
      .map((data) => {
        console.log('datatata:' + data);
        return data;
      })
      .catch(error => {
        console.log('error:' + error);
        return error;
      });
  }

  public validate(materialType: MaterialType): boolean {
    return true;
  }
  getMaterialTypeById(materialType: MaterialType): Observable<any> {
    return this.http.get<any>(baseURL + 'materialType/' + `${materialType.id}`, {responseType: 'json'})
      .map((data) => {
        return data.data;
      })
      .catch(error => {
        console.log('error:' + error);
        return error;
      });
  }

  updateMaterialType(materialType: MaterialType): Observable<MaterialType> {
    return this.http.put(baseURL + 'materialType/' + `${materialType.id}`, materialType, httpOptions).pipe(
      tap(_ => this.log(`updated materialType id=${materialType.id}`)),
      catchError(this.handleError<any>('updateMaterialType'))
    );
  }
  /* Metodh for create Material Type */
  createMaterialType (materialType: MaterialType): Observable<any> {
    console.log('new materialType:', materialType);
    return this.http.post(baseURL + 'materialType/',  materialType, httpOptions)
      .map(response => response)
      .map((data) => {
        return data;
      })
      .catch(error => {
        console.log('error:' + error);
        return error;
      });
  }
  /*Metodh for delete Material Type*/
  deleteMaterialType(materialTypeId: number): Observable<any> {
    return this.http.delete(baseURL + 'materialType/' + `${materialTypeId}`, httpOptions).pipe(
      tap(_ => this.log(`delete materialType id=${materialTypeId}`)),
      catchError(this.handleError<any>('deleteMaterialType'))
    );
  }
  getMaterialType(): Observable<any> {
    return this.http.get<any>(baseURL + 'materialType/materialType', {responseType: 'json'})
      .map((data) => {
        return data.data;
      })
      .catch(error => {
        console.log('error:' + error);
        return error;
      });
  }
}
