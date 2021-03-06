import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IUser } from '../models/user';
import { UserService } from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  loginForm: FormGroup;
  email: FormControl = new FormControl('', Validators.required);
  password: FormControl = new FormControl('', Validators.required);

  ngOnInit(): any {
    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password
    });
  }

  login(): any {
    this.userService.login2(this.loginForm.value).subscribe(
      data => {
        if (data['access_token']) {
          localStorage.setItem('token', data['access_token']);
          this.userService.isLogin = true;
          if (data['roles'].includes('Admin')) {
            this.userService.isAdmin = true;
            this.toastr.success('Success!', 'Logged in successfully');
            this.router.navigateByUrl('/adminProducts');
          } else {
            this.toastr.success('Success!', 'Logged in successfully');
            this.router.navigateByUrl('/products');
          }
        }
      },
      error => {
        this.userService.isLogin = false;
        this.toastr.success('Error!', 'Incorrect Email or Password');
      }
    );
  }

}
