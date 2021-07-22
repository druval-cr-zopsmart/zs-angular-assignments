import { Component, OnInit } from '@angular/core';
import { map, mergeMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductService } from '../../services/product.service';
import Product from '../../product';


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

  addProduct(name: string) {
    const product = { name };
    this.productService.addProduct(product)
      .pipe(
        mergeMap((data: Product) => {
          console.log(data);
          return this.productService.getProducts()
        })
      )
      .subscribe(
        (data) => this.products = data,
        (error) => console.log(error)
      );
  }
}
