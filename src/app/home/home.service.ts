import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/observable/throw';
import {ApiService} from "../api.service";

@Injectable()
export class HomeService {

  constructor(private api: ApiService) {}

  private path = 'housing';

  get(): Observable<any> {

    return this.api.get(this.path);

  }

}
