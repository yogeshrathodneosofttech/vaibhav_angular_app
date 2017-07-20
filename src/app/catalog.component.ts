
import { Component, OnInit } from '@angular/core';
// import {FORM_DIRECTIVES, NgIf} from "angular2/common";
import {CatalogService} from './services/Shopping/shopping.service';
import {NgIf} from '@angular/common'
import {Item} from "./Models/item";
import {ItemPreview} from "./item-preview.component";
import {FilterCatalogItems} from './Utils/Filter.pipe';

@Component({
  selector:'catalog',
  template: `
        <h2>Catalog</h2>
        <div class="container" *ngIf=catalog>
            <div class="row">
                <div class="col-md-4">
                    Search:<br/>
                    <input type="text" [(ngModel)]="search"/>
                </div>
                <div class="col-md-8">
                    <item-preview *ngFor="let item of catalog" [item]="item"></item-preview>
                </div>
            </div>
        </div>
    `,
})

export class Catalog {
  public catalog:Item[] = [];
  public search:string = "";
  constructor(private catalogService:CatalogService){
  }
  ngOnInit() {
    this.catalogService.getCatalog().then((catalog)=>{
      console.log(catalog)
      this.catalog = catalog;
    });
  }
}
