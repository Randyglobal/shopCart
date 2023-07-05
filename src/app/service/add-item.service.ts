import { Injectable } from '@angular/core';
import { Iproduct } from '../interface/products.interface';

@Injectable({
  providedIn: 'root'
})
export class AddItemService {

  constructor() { }

  product: Iproduct[] = [];

  addToCart(product: Iproduct){
    this.product.push(product)
  }
  getProduct(){
    return this.product
  }
  clear(){
    this.product = []
    // return this.product
    window.location.reload()
  }
}
