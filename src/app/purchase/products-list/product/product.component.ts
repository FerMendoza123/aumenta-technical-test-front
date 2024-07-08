import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product, AddedProduct } from 'src/Interfaces/interfaces';
import { PurchaseService } from 'src/Services/purchase.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product! : Product;
  constructor(private _purchaseService : PurchaseService,
    private _toastrService : ToastrService
  ){

  }

  public addProductToCart(id : number){
    let cartProd : AddedProduct = {
      productId : id,
      amount : 1
    }
    this._purchaseService.addProductToCart(cartProd).subscribe(()=>{
      console.log("added");
      this._toastrService.success("Product added to the cart","Success");
      
    })
  }
}
