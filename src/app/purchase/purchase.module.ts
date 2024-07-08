import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [
    ProductsListComponent,
    CartComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PurchaseModule { }
