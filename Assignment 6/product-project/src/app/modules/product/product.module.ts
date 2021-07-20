import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductSearchComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductListComponent
  ],
})
export class ProductModule { }
