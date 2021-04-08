import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../models/user';

// const url: string = 'http://localhost:3000';
const url = 'http://oday9.azurewebsites.net';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLogin = false;
  isAdmin = false;
  reqHeaderToken;
  constructor(private http: HttpClient) {
    const token = localStorage.getItem('token');
    if (token) {
      this.isLogin = true;
    }
    this.reqHeaderToken = new HttpHeaders({
      Authorization: 'bearer ' + token
    });
  }

  login(user: IUser): any {
    return this.http.post(url + '/auth/login', user);
  }

  login2(user: IUser): any {
    const userData =
      'username=' +
      user.email +
      '&password=' +
      user.password +
      '&grant_type=password';
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    return this.http.post(url + '/token', userData, {
      headers: reqHeader
    });
  }

  signUp(user: IUser): any {
    return this.http.post(url + '/api/account/register', user);
  }

  get(): Observable<IUser[]> {
    return this.http.get<IUser[]>(url + '/api/users');
  }

  getProfile(): Observable<IUser> {
    return this.http.get<IUser>(url + '/api/profile', {
      headers: this.reqHeaderToken
    });
  }
}
