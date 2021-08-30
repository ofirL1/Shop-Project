import { NotifyService } from './../../../services/notify.service';
import store  from 'src/app/redux/store';
import { Component, OnInit } from '@angular/core';
import { CartItemModel } from 'src/app/models/cart-item.model';
import { CartService } from 'src/app/services/cart.service';
import { Unsubscribe } from 'redux';
import { MatDialog } from '@angular/material/dialog';
import { RemoveCartDialogComponent } from './remove-cart-dialog/remove-cart-dialog.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public totalCart: number;
  public cartItems: CartItemModel[];
  public cartItemIdToRemove: string;
  private unsubscribeMe: Unsubscribe;
  constructor(private CartService: CartService, public dialog: MatDialog, private NotifyService:NotifyService) { }

  ngOnInit(): void {
    this.getCartItems();
    this.unsubscribeMe = store.subscribe(() => {
      this.cartItems = store.getState().cartState.ProductsCartItems;
      console.log("from cart",this.cartItems);
      this.totalCart = this.CartService.getTotalCartItem();
    });
  }

  openDialog(_id: string,maxQuantity: number): void {
    this.cartItemIdToRemove = _id;
    const dialogRef = this.dialog.open(RemoveCartDialogComponent, {
      width: '250px',
      data: maxQuantity
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        console.log("result",this.cartItemIdToRemove)
        this.deleteCartItem(result);


      }
    });
  }

  public async getCartItems(){
    this.cartItems = await this.CartService.getCartItems();
    this.totalCart = this.CartService.getTotalCartItem();
    console.log("total",this.totalCart);
  }

  public async deleteCartItem(quantity: number){
    try{
     await this.CartService.deleteCartItem(this.cartItemIdToRemove,quantity)

    }
    catch(err){
      this.NotifyService.error(err);
    }
  }

  
}
