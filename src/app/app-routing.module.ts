import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './purchase/products-list/products-list.component';
import { ProductComponent } from './purchase/products-list/product/product.component';
import { CartComponent } from './purchase/cart/cart.component';

const routes: Routes = [
  {path:"purchase", component: ProductsListComponent},
  {path:"cart", component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
