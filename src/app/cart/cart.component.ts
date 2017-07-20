import { Component, OnInit } from '@angular/core';

import {NgIf} from '@angular/common'
import { FormsModule } from '@angular/forms';


import {CartService} from "../services/Cart/cart.service";
import {ItemPreview} from "../item-preview.component";
import {DefaultCheckout} from "../services/Checkout/checkout.service";
import {paymentMethods} from "../Mock/payment-methods.mock.json";
import {ICheckoutType} from "../services/Checkout/checkout.service";

import {Item} from "../Models/item";


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers:[DefaultCheckout],
})
export class CartComponent implements OnInit {



  private cartItems: Item[] = [];
  private paymentOutput: string = "";
  constructor(private cartService:CartService, private defaultCheckout:DefaultCheckout){
    this.cartItems = cartService.getCart();
  }

  ngOnInit() {
  }

  setPaymentType(type:string){
    this.defaultCheckout.checkOutType = paymentMethods.filter(paymentMethod=>paymentMethod.name.toLowerCase()===type.toLowerCase())[0];
  }
  setDiscount(name:string){
    this.cartService.applyDiscount(name);
  }
  pay(){
    this.paymentOutput = this.defaultCheckout.checkOut(this.cartService.getTotalPrice());
  }
}

