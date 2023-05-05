import {Component, OnInit} from '@angular/core';
import {CartService} from "../services/cart/cart.service";
import  {Cart} from "../shared/models/Cart";
import {CartItem} from "../shared/models/CartItem";

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit{
  cart!:Cart
  constructor(private cartServices:CartService) {
    this.setCart();
  }

  ngOnInit(): void {
  }
  setCart(){
    this.cart=this.cartServices.getCart();
  }
  removeFromCart(cartItem:CartItem){
   this.cartServices.removeFormCart(cartItem.food.id);
   this.setCart();
  }
   changeQuantity(cartItem:CartItem,quantityInString:string){
    const quantity=parseInt(quantityInString);
    this.cartServices.changeQuantity(cartItem.food.id,quantity)
     this.setCart()
   }

}
