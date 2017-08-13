import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/observable/throw';
import {ApiService} from "../api.service";
import {House} from "../house/House";

@Injectable()
export class AddHouseService {

  constructor(private api: ApiService) {}

  private path = 'housing';

  post(house: House): Observable<any> {

    return this.api.post(this.path, house);

  }

}
