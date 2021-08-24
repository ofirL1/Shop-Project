import { CartModel } from './../models/cart.model';
import { CartItemModel } from 'src/app/models/cart-item.model';
import store  from 'src/app/redux/store';
import { ProductModel } from './../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { dispatch } from 'rxjs/internal/observable/pairs';
import { cartAddedItem } from '../redux/cart-state';
import { environment } from 'src/environments/environment';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http : HttpClient) { }

  public addCartItem(item: ProductModel, quantity: number){
    const addedItemCart = new CartItemModel();
    addedItemCart.price = item.price;
    addedItemCart.productId = item;
    addedItemCart.quantity = quantity;
    store.dispatch(cartAddedItem(addedItemCart))
    console.log(store.getState().cartState.ProductsCartItems);
  }

  public getCartItems(){
    const cartItems = store.getState().cartState.ProductsCartItems;
    return cartItems;
  }

  public async addCart(){
    const newCart = new CartModel();
    newCart.createDate = new Date();
    newCart.customerId = new UserModel();
    const user = store.getState().authState.user;
    newCart.customerId = user;
    console.log(newCart);
    const addedCart = await this.http.post<CartModel>(environment.cartUrl,newCart).toPromise();
    return addedCart;
  }

}
