import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from '../models/product';
import { ProductsService } from '../services/products.service';
import { UserService } from '../services/users.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: IProduct[];
  constructor(
    private productsService: ProductsService,
    private userService: UserService,
    // private toastr: ToastrManager,
    private router: Router
  ) { }

  ngOnInit(): any {
    this.productsService
      .gets()
      .subscribe(products => this.products = products);
  }

  goProduct(id): any {
    this.router.navigate(['product', id]);
  }

  addToCart(id): any {
    if (!this.userService.isLogin) {
      this.toastr.errorToastr('You must be logged in first');
      this.router.navigateByUrl('/login');
    } else {

      this.productsService.addToCart(id).subscribe(
        data => {
          this.productsService.countTotal = +data;
        },
        errors => {
          console.log(errors);
        }
      );
    }
  }
}
