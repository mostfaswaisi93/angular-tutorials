import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from '../models/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  products: IProduct[];
  constructor(
    private productsService: ProductsService,
    private router: Router
  ) { }

  ngOnInit(): any {
    this.productsService
      .gets()
      .subscribe(products => (this.products = products));
  }

  goAdd(): any {
    this.router.navigate(['addProduct']);
  }

  goEdit(id): any {
    this.router.navigate(['editProduct', id]);
  }

  delete(id): any {
    this.productsService.delete(id).subscribe(data => {
      if (data) {
        this.productsService.gets().subscribe(dd => (this.products = dd));
      }
    });
  }
}
