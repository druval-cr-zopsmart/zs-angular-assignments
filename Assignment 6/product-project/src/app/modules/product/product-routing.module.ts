import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  { path: 'create', component: ProductAddComponent },
  { path: ':id', component: ProductDetailsComponent },
  { path: '', component: ProductListComponent },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ProductRoutingModule {}
