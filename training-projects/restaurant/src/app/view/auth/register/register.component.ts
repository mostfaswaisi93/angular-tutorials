import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {

  createAcountForm: FormGroup | any
  passwordInputIcon: boolean = true
  confirmPasswordInputIcon: boolean = true
  error: string = ""
  signupLoading = false
  signupSub: Subscription
  signinSub: Subscription
  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private dashboard: DashboardService) {
    this.createAcountForm = this.fb.group({
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      confirmPassword: ["", [Validators.required]],
      phoneNumber: ["", [Validators.required, Validators.pattern(/^1\d{9}$/)]],
    })
  }

  ngOnInit(): void {
  }
  get firstName() {
    return this.createAcountForm.get("firstName");
  }
  get lastName() {
    return this.createAcountForm.get("lastName");
  }
  get email() {
    return this.createAcountForm.get("email");
  }
  get password() {
    return this.createAcountForm.get("password");
  }
  get confirmPassword() {
    return this.createAcountForm.get("confirmPassword");
  }
  get phoneNumber() {
    return this.createAcountForm.get("phoneNumber");
  }
  createAcount(f: FormGroup) {
    this.signupLoading = true
    let usernameAndPassword = {
      email: f.value.email,
      password: f.value.password
    }
    this.signupSub = this.authService.signUp(f.value).subscribe((res: any) => {
      this.error = ""
      this.signinSub = this.authService.signIn(usernameAndPassword).subscribe((res: any) => {
        this.signupLoading = false
        localStorage.setItem("token", res.token)
        this.authService.prepearUserData()
        this.router.navigate([`/home`])      
      })
    }, (err: any) => {
      this.signupLoading = false
      this.error = err.error.message
    })
  }
  ngOnDestroy() {
    if (this.signinSub) this.signinSub.unsubscribe()
    if (this.signupSub) this.signupSub.unsubscribe()
  }

}
