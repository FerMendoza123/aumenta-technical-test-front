import { Component, OnInit } from '@angular/core';
import { Purchase, Ticket } from 'src/Interfaces/interfaces';
import { PurchaseService } from 'src/Services/purchase.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  purchase! : Purchase;
  ticket! : Ticket;
  constructor(private _purchaseService : PurchaseService){

  }

  ngOnInit(): void {
    this._purchaseService.getLastPurchase().subscribe((pur:Purchase)=>{
      this.purchase = pur;
    })
  }

  public finishPurchase(){
    this._purchaseService.finishPurchase().subscribe((tick)=>{
      this.ticket = tick;
      console.log(tick);
    })
  }
}
