import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './services/auth.service';
import { CartService } from './services/cart.service';
import { DashboardService } from './services/dashboard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'restaurant';
  sideNav = false
  categories: any
  preventScroll = false
  constructor(
    public fb: FormBuilder,
    public cartservice: CartService,
    private toastr: ToastrService,
    public authService: AuthService,
    public dashboard: DashboardService,) {
 
    for (let i = 0; i < this.cartservice.cartData.length; i++) {
      this.cartservice.totalAmount += this.cartservice.cartData[i].quantity
    }

    if (authService.isLogin()) {
      this.authService.prepearUserData()
    }
    this.dashboard.getCategoriesNames().subscribe((res: any) => {
      this.dashboard.categoriesNames = res.categoriesNames
    }, err => alert(err.error.message))



  }

  ngOnInit() {
  }

  yourCartISEmpty() {
    if (this.cartservice.totalAmount == 0) {
      this.toastr.success('Your Cart Is Empty', '', {
        timeOut: 2000,
      });
    }

  }






}
