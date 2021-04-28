import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private webService: WebRequestService, private router: Router, private http: HttpClient) { }

  login(email: string, password: string): any {
    return this.webService.login(email, password).pipe(
      // shareReplay(),
      // tap((res: HttpResponse<any>) => {
      //   // the auth tokens will be in the header of this response
      //   this.setSession(res.body._id, res.headers.get('x-access-token'), res.headers.get('x-refresh-token'));
      //   console.log('LOGGED IN!');
      // })
    );
  }


  signup(email: string, password: string): any {
    return this.webService.signup(email, password).pipe(
      // shareReplay(),
      // tap((res: HttpResponse<any>) => {
      //   // the auth tokens will be in the header of this response
      //   this.setSession(res.body._id, res.headers.get('x-access-token'), res.headers.get('x-refresh-token'));
      //   console.log('Successfully signed up and now logged in!');
      // })
    );
  }

  logout(): any {
    this.removeSession();

    this.router.navigate(['/login']);
  }

  getAccessToken(): any {
    return localStorage.getItem('x-access-token');
  }

  getRefreshToken(): any {
    return localStorage.getItem('x-refresh-token');
  }

  getUserId(): any {
    return localStorage.getItem('user-id');
  }

  setAccessToken(accessToken: string): any {
    localStorage.setItem('x-access-token', accessToken);
  }

  private setSession(userId: string, accessToken: string, refreshToken: string): any {
    localStorage.setItem('user-id', userId);
    localStorage.setItem('x-access-token', accessToken);
    localStorage.setItem('x-refresh-token', refreshToken);
  }

  private removeSession(): any {
    localStorage.removeItem('user-id');
    localStorage.removeItem('x-access-token');
    localStorage.removeItem('x-refresh-token');
  }

  getNewAccessToken(): any {
    // return this.http.get(`${this.webService.ROOT_URL}/users/me/access-token`, {
    //   headers: {
    //     'x-refresh-token': this.getRefreshToken(),
    //     '_id': this.getUserId()
    //   },
    //   observe: 'response'
    // }).pipe(
    //   tap((res: HttpResponse<any>) => {
    //     this.setAccessToken(res.headers.get('x-access-token'));
    //   })
    // );
  }

}
