import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../models/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: IProduct;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): any {
    this.productsService
      .get(this.activatedRoute.snapshot.params['id'])
      .subscribe(data => {
        this.product = data;
      });
  }

}
