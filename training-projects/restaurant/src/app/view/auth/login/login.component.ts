import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  signinLoading=false
  loginForm:FormGroup
  passwordInputIcon:boolean|any=false
  error:string=""
  signinSub:Subscription
    constructor(private fb:FormBuilder,
      private authservice:AuthService,
      private dashboard:DashboardService,
      private router:Router) { 
      this.loginForm = this.fb.group({
        email:["",Validators.required],
        password:["",Validators.required]
      })
    }
  
    get email() {
      return this.loginForm.get("email")
    }
    get password() {
      return this.loginForm.get("password")
    }
      ngOnInit(): void {
      }
    login(resgisterForm:FormGroup) {
      this.signinLoading=true
    this.signinSub = this.authservice.signIn(resgisterForm.value).subscribe((res:any) => {
         this.signinLoading=false
         this.error=""
         localStorage.setItem("token",res.token)         
         this.authservice.prepearUserData()
          this.router.navigate([`/home`])      
      }, (err:any) => {
        this.signinLoading=false
        this.error = err.error.message
      })
    }
ngOnDestroy() {
  if(this.signinSub) this.signinSub.unsubscribe()
}
}
