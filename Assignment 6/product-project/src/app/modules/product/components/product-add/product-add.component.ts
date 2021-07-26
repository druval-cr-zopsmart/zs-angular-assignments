import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { productNameValidator } from '../../directives/validators/product-name.directive';
import Product from '../../product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss'],
})
export class ProductAddComponent implements OnInit {
  productForm!: FormGroup;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productForm = new FormGroup({
      name: new FormControl(null, productNameValidator()),
      price: new FormControl(null, [Validators.required, Validators.min(0)]),
      quantity: new FormControl(null, [Validators.required, Validators.min(1)]),
      isLimited: new FormControl(false, Validators.required),
    });
  }

  get formControl() {
    return this.productForm.controls; 
  }

  onSubmit() {
    console.log(this.productForm.value);
    if (this.productForm.invalid) return;
    const product: Product = this.productForm.value;

    this.productService.addProduct(product).subscribe(
      (data) => {
        console.log(data);
        this.productForm.reset();
        alert('Product Added');
      },
      (error) => console.log(error)
    );
  }
}
