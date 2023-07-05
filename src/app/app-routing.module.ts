import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ViewCardComponent } from './view-card/view-card.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ClearCartComponent } from './clear-cart/clear-cart.component';

const routes: Routes = [
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'view',
    component: ViewCardComponent
  },
  {
    path: 'emptyCart',
    component: ClearCartComponent
  },
  {
    path: '',
    redirectTo:'/product', pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
