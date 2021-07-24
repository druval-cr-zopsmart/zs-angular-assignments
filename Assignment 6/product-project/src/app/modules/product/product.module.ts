import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductRoutingModule } from './product-routing.module';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductNameDirective } from './directives/validators/product-name.directive';
import { HighlightLimitedProductDirective } from './directives/highlight-limited-product.directive';

@NgModule({
  declarations: [
    ProductSearchComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductAddComponent,
    ProductNameDirective,
    HighlightLimitedProductDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
  ],
})
export class ProductModule { }
