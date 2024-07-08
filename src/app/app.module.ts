import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './purchase/navigation-bar/navigation-bar.component';
import { ProductsListComponent } from './purchase/products-list/products-list.component';
import { CartComponent } from './purchase/cart/cart.component';
import { ProductComponent } from './purchase/products-list/product/product.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    CartComponent,
    NavigationBarComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
