import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductsService } from './services/products.service';
import { UserService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'maba';
  constructor(
    public userService: UserService,
    private productsService: ProductsService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  logOut(): any {
    this.userService.isLogin = false;
    this.userService.isAdmin = false;
    localStorage.removeItem('token');
    this.toastr.success('Logged out successfully');
    this.router.navigateByUrl('/login');
  }

  goCart(): any {
    this.router.navigateByUrl('/checkout');
  }
}
