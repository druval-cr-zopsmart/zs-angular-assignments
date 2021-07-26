import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductService } from '../../services/product.service';
import Product from '../../product';

console.warn('product loaded');


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products!: Product[];
  searchParams!: string | undefined;

  constructor(
    private productService: ProductService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
  ){ }

  ngOnInit(): void {
    this.fetchProducts(this.activatedRouter.snapshot.queryParams.query);
  }

  fetchProducts(query?: string) {
    this.searchParams = query;
    this.productService.getProducts(this.searchParams)
      .subscribe(
        (data) => this.products = data,
        (error) => console.log(error)
      );

    let queryParams = this.searchParams? { query: this.searchParams } : {};
    this.router.navigate([], {
      relativeTo: this.activatedRouter,
      queryParams
    });
  }
}
