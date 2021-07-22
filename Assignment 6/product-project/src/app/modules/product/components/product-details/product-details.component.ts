import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { mergeMap } from 'rxjs/operators';

import Product from '../../product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product!: Product;

  constructor(
    private productService: ProductService,
    private activatedRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRouter.paramMap
    .pipe(
      mergeMap((params: ParamMap) => {
        const id: string = params.get('id')!;
        return this.productService.getProduct(id);
      })
    )
    .subscribe(
      (data) => {
        console.log(data);
        this.product = data
      },
      (error) => console.log(error)
    )
  }
}
