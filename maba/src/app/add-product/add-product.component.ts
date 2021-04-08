import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IProduct } from '../models/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product: IProduct;
  addForm: FormGroup;
  name = new FormControl('', [Validators.required]);
  title = new FormControl('', [Validators.required]);
  subTitle = new FormControl('', [Validators.required]);
  price = new FormControl('', [Validators.required]);
  description = new FormControl('', [Validators.required]);
  image = new FormControl('', [Validators.required]);

  constructor() { }

  ngOnInit(): any {
    this.addForm = new FormGroup({
      name: this.name,
      title: this.title,
      subTitle: this.subTitle,
      price: this.price,
      description: this.description,
      image: this.image
    });
  }

  save(): any { }
}
