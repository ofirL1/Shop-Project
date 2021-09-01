import { NotifyService } from './notify.service';
import { CartModel } from './../models/cart.model';
import { CartItemModel } from 'src/app/models/cart-item.model';
import store  from 'src/app/redux/store';
import { ProductModel } from './../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { dispatch } from 'rxjs/internal/observable/pairs';
import { cartAddedItem, cartDownloadedItems } from '../redux/cart-state';
import { environment } from 'src/environments/environment';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http : HttpClient, private NotifyService: NotifyService) { }

  public async addCartItem(item: ProductModel, quantity: number){
    try{
      const addedItemCart = new CartItemModel(item,quantity);
      const itemAdded = await this.http.post<CartItemModel>(environment.cartItemUrl,addedItemCart).toPromise();
      store.dispatch(cartAddedItem(itemAdded))
      
    }
    catch(err){
      this.NotifyService.error(err);
    }
    
  }

  public getTotalCartItem(){
    let total = 0;
    const items = store.getState().cartState.ProductsCartItems;
    items.map(i => {total+= i.price});
    return total;
  }

  public async getCartItems(): Promise<any>{
    try{
      if(store.getState().cartState.ProductsCartItems.length === 0){
        const cartItems = await this.http.get<CartItemModel[]>(environment.cartItemUrl).toPromise();
        store.dispatch(cartDownloadedItems(cartItems));
      }
      return store.getState().cartState.ProductsCartItems;
    }
    catch(err){
      this.NotifyService.error(err)
    }
  }

  public async addCart(){
    const newCart = new CartModel();
    newCart.createDate = new Date();
    newCart.customerId = new UserModel();
    const user = store.getState().authState.user;
    newCart.customerId = user;
    const addedCart = await this.http.post<CartModel>(environment.cartUrl,newCart).toPromise();
    return addedCart;
  }

  public async deleteCartItem(_id: string,quantity: number){
    return await this.http.delete(environment.deleteCartItem + `${_id}/${quantity}`).toPromise();

  }

}
