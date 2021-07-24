import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/product', pathMatch: 'full' },
  { path: 'product/create', component: ProductAddComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'product', component: ProductListComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class ProductRoutingModule {}
