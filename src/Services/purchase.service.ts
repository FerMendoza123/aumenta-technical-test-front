import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { HttpClient } from "@angular/common/http"
import { AddedProduct, Product, Purchase, Ticket } from 'src/Interfaces/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  // public cartProducts : Observable<number> = Ob;
  constructor(private http : HttpClient ) { }

  public getAllProducts() : Observable<Product[]>{
    let endpoint : string = "GetAllProducts";
    return this.http.get<Product[]>(this.getCompleteRoute(endpoint));
  }

  public addProductToCart(product : AddedProduct){
    let endpoint : string = "AddProductToCart";
    return this.http.post(this.getCompleteRoute(endpoint),product);
  }

  public getLastPurchase() : Observable<Purchase>{
    let endpoint : string = "GetLastPurchase";
    return this.http.get<Purchase>(this.getCompleteRoute(endpoint));
  }

  public finishPurchase() : Observable<Ticket>{
    let endpoint : string = "FinishPurchase";
    return this.http.put<Ticket>(this.getCompleteRoute(endpoint), {});
  }

  private getCompleteRoute(route : string) : string{
    return environment.aumentaTestApi + "/" + route;
  }
}
