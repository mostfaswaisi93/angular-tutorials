import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IProduct } from '../models/product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product: IProduct;
  editForm: FormGroup;
  name = new FormControl('', [Validators.required]);
  title = new FormControl('', [Validators.required]);
  subTitle = new FormControl('', [Validators.required]);
  price = new FormControl('', [Validators.required]);
  description = new FormControl('', [Validators.required]);
  image = new FormControl('', [Validators.required]);
  constructor() { }

  ngOnInit(): any {
    this.editForm = new FormGroup({
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
