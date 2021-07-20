import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../services/product.service';
import Product from '../../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products!: Product[];
  productsFiltered!: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.productsFiltered = this.products;
  }

  filterProducts(query: string) {
    this.productsFiltered = this.productService.filterProducts(query, this.products);
  }

  showAllProducts() {
    this.productsFiltered = this.products;
  }

}
