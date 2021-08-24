import store  from 'src/app/redux/store';
import { Component, OnInit } from '@angular/core';
import { CartItemModel } from 'src/app/models/cart-item.model';
import { CartService } from 'src/app/services/cart.service';
import { Unsubscribe } from 'redux';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public cartItems: CartItemModel[];
  private unsubscribeMe: Unsubscribe;
  constructor(private CartService: CartService) { }

  ngOnInit(): void {

    this.unsubscribeMe = store.subscribe(() => {
      this.cartItems = store.getState().cartState.ProductsCartItems;
      console.log("from cart",this.cartItems);
  });


  }

  public getCartItems(){
    this.cartItems = this.CartService.getCartItems();
    console.log(this.cartItems);
  }
}
