
import { Component, OnInit ,Input} from '@angular/core';
// import {NgIf,NgFor} from "angular2/common";
import {NgIf,NgFor} from '@angular/common'
// import { RouteParams } from 'angular2/router';
import { ActivatedRoute } from '@angular/router';

import {CatalogService} from './services/Shopping/shopping.service';
import {CartService} from "./services/Cart/cart.service";
import {Item} from "./Models/item";

@Component({
  selector:'item-details',
  template: `
    <div class="container">
        <div class="row" *ngIf=details>
            <div class="col-md-4"><img src={{details.image_src}}/></div>
            <div class="col-md-4">{{details.name}}<br/>{{details.manufacturer}}<br/>{{details.price}}<br/>{{details.averageReviewRate}}</div>
        </div>
        <div class="row" *ngIf=details.comments>
            <h3>Comments</h3>
            <div class="row" *ngFor="let comment of details.comments">
               <div class="col-md-4"><img src={{comment.name}}/></div>
               <div class="col-md-4" *ngIf="comment.rate"><img src={{comment.rate}}/></div>
               <div class="col-md-4">{{comment.comment}}</div>
            </div>
        </div>
        <div class="row" *ngIf=!details>
            <h3>Loading</h3>
        </div>
    </div>
    `
})

export class Details {
  private details:Item;
  constructor(private routeParams:ActivatedRoute, private catalogService:CatalogService, private cartService:CartService){
    this.routeParams.params.subscribe(params => {
      // this.id = +params['id']; // (+) converts string 'id' to a number
      this.loadDetailsById(params['id']);
      // In a real app: dispatch action to load the details here.
    });

  }
  loadDetailsById(id:String):void{
    this.details = this.catalogService.getById(id);
  }
}
