import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './purchase/navigation-bar/navigation-bar.component';
import { ProductsListComponent } from './purchase/products-list/products-list.component';
import { CartComponent } from './purchase/cart/cart.component';
import { ProductComponent } from './purchase/products-list/product/product.component';
import { HttpClient, HttpClientModule, HttpHandler } from "@angular/common/http"

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
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
