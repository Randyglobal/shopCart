import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewCardComponent } from './view-card/view-card.component';
import { ProductComponent } from './product/product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { NavBarComponent } from './navigate/nav-bar/nav-bar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './footer/footer.component'
import {MatBadgeModule} from '@angular/material/badge';
import { ClearCartComponent } from './clear-cart/clear-cart.component';



@NgModule({
  declarations: [
    AppComponent,
    ViewCardComponent,
    ProductComponent,
    NavBarComponent,
    NotFoundComponent,
    FooterComponent,
    ClearCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
