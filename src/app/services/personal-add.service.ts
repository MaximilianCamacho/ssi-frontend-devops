import { Injectable } from '@angular/core';
import {Observable} from '../../../node_modules/rxjs';
import {Area} from '../models/area.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class PersonalAddService {
  constructor(private http: HttpClient) {}

  public validate(): boolean {
    return true;
  }

}

