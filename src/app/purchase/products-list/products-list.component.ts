import { Component, OnInit } from '@angular/core';
import { Product } from 'src/Interfaces/interfaces';
import { PurchaseService } from 'src/Services/purchase.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent  {
  public products : Product[] = [];
  constructor(private _purchaseService : PurchaseService){

  }

  ngOnInit(): void {
    this._purchaseService.getAllProducts().subscribe((prods:Product[])=>{
      this.products = prods;
      console.log(prods);
      
    })
  }
}
