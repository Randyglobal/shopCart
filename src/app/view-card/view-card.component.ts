import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddItemService } from '../service/add-item.service';
import { Iproduct } from '../interface/products.interface';

@Component({
  selector: 'app-view-card',
  templateUrl: './view-card.component.html',
  styleUrls: ['./view-card.component.scss']
})
export class ViewCardComponent implements OnInit {
  totalPrice: number = 0;
  totalFee: number = 0
  totalPricePlusFee: number = 0

  answer: string = 'yes'
  answer2: string = 'No'

  popUp: boolean = false;

  cart: boolean = false

  constructor( private route: ActivatedRoute, private productItems: AddItemService){

  }

  pop(){
     this.popUp = !this.popUp
  }
  //get the products
 product: Iproduct[] = this.productItems.getProduct()

  ngOnInit(): void {
    let newArray = this.productItems.getProduct()
    console.log(newArray);
     for (let i= 0; i < newArray.length; i++) {
      console.log('This is length',newArray.length);
      this.totalPrice += newArray[i].price;
         this.totalFee += ((2/100)* newArray[i].price)
      this.totalPricePlusFee += (((2/100)* newArray[i].price) + newArray[i].price)
     }
  }
  //can be ignored
  checkProduct(){
    let newArray = this.productItems.getProduct()
    console.log(newArray);   
  }

  //add products qty
  addQty(product: Iproduct){
  if (product['quantity' as keyof object]) {
    product['quantity' as keyof object]++
  }
  for(let i=0;i<this.product.length;i++){
    if(this.product[i].productId == product.productId) {
        
      this.totalPrice += product.price;
      this.totalFee += ((2/100)* this.product[i].price)
      this.totalPricePlusFee += ((2/100) * this.product[i].price) + this.product[i].price;

    }
  }
}
// reduce quantity
  reduceQty(product: Iproduct){
    if (product['quantity' as keyof object]) {
      product['quantity' as keyof object]--
    }
    for (let i = 0; i < this.product.length; i++) {
      if (this.product[i].productId == product.productId) {
        this.totalPrice -= product.price;
           this.totalFee -= ((2/100)* product.price)
           this.totalPricePlusFee -= (((2/100) * product.price) + product.price)
        if (this.product[i].quantity < 1) {
         this.popUp = true
         return
        }}
    }
  }

deletePop(product: Iproduct){
  this.popUp = true
}

  deleteCart(product: Iproduct){
    for (let i = 0; i < this.product.length; i++) {
      // if (this.product[i].productId == product.productId) {
      // if (this.product[i].quantity < 1) {
        // let response = prompt("If Product is less than one, you might want to delete the product")
    
    // if (this.popUp = true) {
          this.product = [...this.product.slice(0, this.product.indexOf(product)), ...this.product.slice(
            this.product.indexOf(product)+1, this.product.length
           )]
           this.totalPrice -= product.price;
           this.totalFee -= ((2/100)* product.price)
           this.totalPricePlusFee -= (((2/100) * product.price) + product.price)
    // }

    // }
    }
  
   
  }
  clearCart(){
    this.productItems.clear()
    window.location.replace('http://localhost:4200/emptyCart')
  }

  cartEmpty(){
  }
}
