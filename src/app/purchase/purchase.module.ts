import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { CartComponent } from './cart/cart.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ProductComponent } from './products-list/product/product.component';
import { PurchaseComponent } from './purchase.component';



@NgModule({
  declarations: [
    ProductsListComponent,
    CartComponent,
    NavigationBarComponent,
    ProductComponent,
    PurchaseComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ProductsListComponent,
    CartComponent
  ]
})
export class PurchaseModule { }
