import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { CartComponent } from './cart/cart.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ProductComponent } from './products-list/product/product.component';



@NgModule({
  declarations: [
    ProductsListComponent,
    CartComponent,
    NavigationBarComponent,
    ProductComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PurchaseModule { }
