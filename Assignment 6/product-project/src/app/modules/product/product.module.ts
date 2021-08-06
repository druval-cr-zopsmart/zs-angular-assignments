import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

import { ProductRoutingModule } from './product-routing.module';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductNameDirective } from './directives/validators/product-name.directive';
import { HighlightLimitedProductDirective } from './directives/highlight-limited-product.directive';
import { CurrencyConvertPipe } from 'src/app/pipes/currency-convert.pipe';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    CurrencyConvertPipe,
    ProductSearchComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductAddComponent,
    ProductNameDirective,
    HighlightLimitedProductDirective,
    TableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AccordionModule,
    ButtonModule,
    TableModule,
  ],
  exports: [
  ],
})
export class ProductModule { }
