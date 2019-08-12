import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AbstractServiceService} from './abstract-service.service';

@Injectable()
export class CapacityService extends AbstractServiceService {

  constructor(private http: HttpClient) {
    super(http);
  }
}

