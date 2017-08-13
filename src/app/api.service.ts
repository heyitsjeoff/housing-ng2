import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/observable/throw';

@Injectable()
export class ApiService {

  private headers: Headers = new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });

  private url: string = 'http://localhost:8080/api/';

  constructor(private http: Http) {}

  get(path: string): Observable<any> {

    return this.http.get(`${this.url}${path}`, {headers: this.headers})
      .map(this.checkForError)
      .catch((err) => Observable.throw(err))
      .map(this.getJson);

  }

  post(path: string, body): Observable<any> {

    return this.http.post(
      `${this.url}${path}`, JSON.stringify(body), {headers: this.headers}
    )
      .map(this.checkForError)
      .catch((err) => Observable.throw(err))
      .map(this.getJson);

  }

  put(path: string, body): Observable<any> {

    return this.http.put(
      `${this.url}${path}`, JSON.stringify(body), {headers: this.headers}
    )
      .map(this.checkForError)
      .catch((err) => Observable.throw(err))
      .map(this.getJson);

  }

  private getJson(res: Response) {
    return res.json();
  }

  private checkForError(res: Response): Response {

    const status = res.status;

    if (status >= 200 && status < 300) {

      return res;

    } else { // dont really need else but it is more explicit

      const error = new Error(res.statusText);
      error['response'] = res;
      console.error(error);
      throw error;

    }

  }

}
