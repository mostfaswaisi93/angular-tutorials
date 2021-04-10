import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../services/users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  signUpForm: FormGroup;
  email: FormControl = new FormControl('', Validators.required);
  firstName: FormControl = new FormControl('', Validators.required);
  lastName: FormControl = new FormControl('', Validators.required);
  password: FormControl = new FormControl('', Validators.required);
  confirmPassword: FormControl = new FormControl('', Validators.required);
  ngOnInit(): any {
    this.signUpForm = new FormGroup(
      {
        email: this.email,
        firstName: this.firstName,
        lastName: this.lastName,
        password: this.password,
        confirmPassword: this.confirmPassword
      },
      {
        validators: this.confirmValidator
      }
    );
  }

  signUp(): any {
    this.userService.signUp(this.signUpForm.value).subscribe(
      data => {
        console.log('d', data);
        this.toastr.success('SignUp Successfully');
        this.router.navigateByUrl('/login');
      },
      errors => {
        console.log(errors);

        for (const ms of errors.error.modelState['']) {
          this.toastr.error(ms);
        }
      }
    );
  }

  confirmValidator(ac: AbstractControl): any {
    // get value from password input
    const password = ac.get('password').value;
    // get value from confirmPassword input
    const confirmPassword = ac.get('confirmPassword').value;
    if (password && confirmPassword) {
      if (password !== confirmPassword) {
        ac.get('confirmPassword').setErrors({ matchPassword: true });
      } else {
        return null;
      }
    }
  }
}
