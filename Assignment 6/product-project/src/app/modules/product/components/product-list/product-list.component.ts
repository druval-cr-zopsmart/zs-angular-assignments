import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductService } from '../../services/product.service';
import Product from '../../interface/product';
import { map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products!: Product[];

  constructor(
    private productService: ProductService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
  ){ }

  ngOnInit(): void {
    this.activatedRouter.queryParams.pipe(
      map(data => data.query),
      mergeMap((query: string) => this.productService.getProducts(query))
    )
    .subscribe(
      (data) => this.products = data,
      (error) => console.log(error)
    )
  }

  fetchProducts(query?: string) {
    this.router.navigate([], {
      relativeTo: this.activatedRouter,
      queryParams: query? { query } : {}
    });
  }
}
