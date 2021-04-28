import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  readonly ROOT_URL;

  constructor(private http: HttpClient) {
    this.ROOT_URL = 'http://localhost:3000';
  }

  get(uri: string): any {
    return this.http.get(`${this.ROOT_URL}/${uri}`);
  }

  // tslint:disable-next-line:ban-types
  post(uri: string, payload: Object): any {
    return this.http.post(`${this.ROOT_URL}/${uri}`, payload);
  }

  // tslint:disable-next-line:ban-types
  patch(uri: string, payload: Object): any {
    return this.http.patch(`${this.ROOT_URL}/${uri}`, payload);
  }

  delete(uri: string): any {
    return this.http.delete(`${this.ROOT_URL}/${uri}`);
  }

  login(email: string, password: string): any {
    return this.http.post(`${this.ROOT_URL}/users/login`, {
      email,
      password
    }, {
      observe: 'response'
    });
  }

  signup(email: string, password: string): any {
    return this.http.post(`${this.ROOT_URL}/users`, {
      email,
      password
    }, {
      observe: 'response'
    });
  }

}
