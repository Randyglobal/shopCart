import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddItemService } from '../service/add-item.service';
import { Iproduct } from '../interface/products.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

 productId = new Date().getTime()

 notification: number = 0;

  constructor( private route: ActivatedRoute, private productItems: AddItemService){

  }
 products: Iproduct[] = this.productItems.getProduct()


  ngOnInit(): void {
    let newArray = this.productItems.getProduct()
    console.log(newArray);
     for (let i= 0; i < newArray.length; i++) {
      console.log('This is length',newArray.length);
     }
  }
  product: Iproduct[] = [
    {
      name: 'TV Set',
      quantity: 1,
      productId: 2,
      price: 400,
      img: '../assets/img/tv.jpg'
    },
    {
      name: 'Iphone XR ',
      quantity: 1,
      productId: 3,
      price: 500,
      img:'../assets/img/Iphone.webp'
    },
    {
      name: 'Mobile Phone',
      quantity: 1,
      productId: 5,
      price: 200,
      img: '../assets/img/download.jpg'
    },
    {
      name: 'Tshirt',
      quantity: 1,
      productId: 6,
      price: 600,
      img: '../assets/img/shirt.png'
    },
  ]
  addToCart(product: Iproduct){
    this.productItems.addToCart(product)
    alert('Product Added')
    console.log(this.productItems);   
  }

  getProducts(){
    this.productItems.getProduct()
    console.log(this.productItems);
    
  }
  cartNum(event: Event) {
    let newArray = this.productItems.getProduct()
    console.log(newArray);
     for (let i= 0; i < newArray.length; i++) {
      console.log('This is length',newArray.length);
     }
     return newArray.length;
  }
}
