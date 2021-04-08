import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
    private userService: UserService,
    private productsService: ProductsService,
    private router: Router,
    // private toastr: ToastrManager
  ) { }

  logOut(): any {
    this.userService.isLogin = false;
    this.userService.isAdmin = false;
    localStorage.removeItem('token');
    // this.toastr.successToastr('Logged out successfully');
    this.router.navigateByUrl('/login');
  }

  goCart(): any {
    this.router.navigateByUrl('/checkout');
  }
}
