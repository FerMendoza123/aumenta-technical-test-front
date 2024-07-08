import { Component, Input } from '@angular/core';
import { Product, AddedProduct } from 'src/Interfaces/interfaces';
import { PurchaseService } from 'src/Services/purchase.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product! : Product;
  constructor(private _purchaseService : PurchaseService){

  }

  public addProductToCart(id : number){
    let cartProd : AddedProduct = {
      productId : id,
      amount : 1
    }
    this._purchaseService.addProductToCart(cartProd).subscribe(()=>{
      console.log("added");
      
    })
  }
}
