import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductRoutingModule } from './product-routing.module';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductAddComponent } from './components/product-add/product-add.component';

@NgModule({
  declarations: [
    ProductSearchComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductAddComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductRoutingModule
  ],
  exports: [
  ],
})
export class ProductModule { }
