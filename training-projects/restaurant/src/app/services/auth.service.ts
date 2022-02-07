import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userProfile:any
  constructor(private httpclient:HttpClient,
    private router:Router) { }
  signUp(userInfo: any):any {
      return this.httpclient.post<any>(`${environment.apiUrl}/api/signup`,userInfo)
}

signIn(userInfo: any):any {
    return this.httpclient.post<any>(`${environment.apiUrl}/api/signin`,userInfo)
}
signout() {
  this.userProfile=""
  this.router.navigate(["auth/login"])
  localStorage.removeItem("token")
}
getToken() {
 return  localStorage.getItem("token")
}
isLogin() {
  return !!localStorage.getItem("token")
}
getUserProfile() {
  return this.httpclient.get<any>(`${environment.apiUrl}/api/users/user`)
}
prepearUserData() {
  if(this.isLogin()) {
    this.getUserProfile().subscribe(res => {
      this.userProfile = res
    }, err => {
      localStorage.removeItem('token')
      alert(err.error.message)
    })
  }
}
}
