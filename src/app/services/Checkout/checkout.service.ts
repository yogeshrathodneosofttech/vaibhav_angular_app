import { Injectable } from '@angular/core';
import {discounts} from "../../Mock/discounts.mock.json";
import {paymentMethods} from "../../Mock/payment-methods.mock.json";

export interface ICheckoutType {
  name:string;
  pay(totalPrice:number):string;
}
export interface IDiscount {
  code:string;
  amount:number;//percentage
}
export interface ICheckout {
  checkOut(totalPrice:number):string;
}

@Injectable()
export class DefaultCheckout implements ICheckout{
  private _checkOutType:ICheckoutType = null;
  set checkOutType(value:ICheckoutType) {
    this._checkOutType = value;
  }
  checkOut(totalPrice:number){
    return this._checkOutType ? this._checkOutType.pay(totalPrice) : "Please select method of payment";
  }

}
