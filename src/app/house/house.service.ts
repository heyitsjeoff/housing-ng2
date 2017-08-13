import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/observable/throw';
import {ApiService} from "../api.service";

@Injectable()
export class HouseService {

  constructor(private api: ApiService) {}

  private path = 'housing';

  getHouse(id: String): Observable<any> {

    return this.api.get(`${this.path}?_id=${id}`);

  }

  updateHouse(body): Observable<any> {

    return this.api.put(this.path, body);

  }

}
