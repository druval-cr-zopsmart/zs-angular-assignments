import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, mergeMap } from 'rxjs/operators';

import { ProductService } from '../../services/product.service';
import Product from '../../interface/product';
import mod from '../../../../helpers/modulus';
import NavigationModel from '../../interface/navigationModel';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  productDetailIndex: number = 0;

  list: NavigationModel[] = [
    {
      title: "Section 1",
      children: [
        {
          title: "Section 1.1",
          children: []
        },
      ]
    },
    {
      title: "Section 2",
      children: [
        {
          title: "Section 2.1",
          children: []
        },
        {
          title: "Section 2.2",
          children: []
        },
        {
          title: "Section 2.3",
          children: []
        }
      ]
    },
    {
      title: "Section 3",
      children: [
        { title: "Section 3.1", children: [] },
        {
          title: "Section 3.2",
          children: [
            {
              title: "Section 3.2.1",
              children: []
            },
            {
              title: "Section 3.2.2",
              children: []
            },
            {
              title: "Section 3.2.3",
              children: [
                {
                  title: "Section 3.2.3.1",
                  children: []
                },
                {
                  title: "Section 3.2.3.2",
                  children: []
                }
              ]
            }
          ]
        },
        {
          title: "Section 3.3",
          children: [
            {
              title: "Section 3.3.1",
              children: []
            },
            {
              title: "Section 3.3.2",
              children: []
            }
          ]
        }
      ]
    }
  ];

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

  handleFilterProducts(query?: string) {
    this.router.navigate([], {
      relativeTo: this.activatedRouter,
      queryParams: query? { query } : {}
    });
  }

  switchProduct(direction: string) {
    let payload: number = 0;
    const totalProducts = this.products.length;

    switch (direction) {
      case 'UP':
        payload = -1;
        break;
      case 'DOWN':
        payload = 1;
        break;
      default: break;
    }
    this.productDetailIndex = mod(this.productDetailIndex + payload, totalProducts);
  }

  onTabOpen(e: { index: number }) {
    this.productDetailIndex = e.index;
  }
}
