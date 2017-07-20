import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Router,Routes, RouterModule } from "@angular/router";
// import { Router } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import {ItemPreview} from "./item-preview.component";
// import {ROUTER_PROVIDERS} from 'angular2/router';
import {CartService} from "./services/Cart/cart.service"
import {CatalogService} from "./services/Shopping/shopping.service";
import {Catalog} from "./catalog.component";
import {Details} from "./details.component";

const routes: any = [
  { path:'', name: 'Catalog', component: Catalog },
  { path:'Item/:id', name: 'Details', component: Details },
  { path:'Cart', name: 'Cart', component: CartComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    Catalog,
    Details,
    ItemPreview
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CatalogService,CartService],
  bootstrap: [AppComponent]
  // ,exports: [ RouterModule ]
})
export class AppModule { }
