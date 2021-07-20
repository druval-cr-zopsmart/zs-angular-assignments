import { Injectable } from '@angular/core';

import Product from '../product';
import allProducts from '../all-products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Product[] {
    return allProducts;
  }

  // filter wrt product name
  filterProducts(query: string, products: Product[]): Product[] {
    query = query.trim().toLowerCase();
    if (query.length === 0) return [];

    const result = products.filter(product => {
      const name = product.name.trim().toLowerCase();
      return name.includes(query);
    });

    return result;
  }
}
