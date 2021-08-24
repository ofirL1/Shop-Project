import { CartService } from 'src/app/services/cart.service';
import { CartModel } from './../../../models/cart.model';
import { UserModel } from './../../../models/user.model';
import { Component, OnInit } from '@angular/core';
import store from 'src/app/redux/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public user: UserModel;
  public activeCart: CartModel;
  
  constructor(private router: Router, private CartService: CartService) { }

  ngOnInit(): void {
    this.user= store.getState().authState.user
    this.activeCart = JSON.parse(localStorage.getItem("activeCart"));
    console.log(this.activeCart);
  }

  public async goToShoppingPage(){
    try{
      if(!this.activeCart){

        const addedCart = await this.CartService.addCart();
        console.log(addedCart.customerId);
        localStorage.setItem("activeCart",JSON.stringify(addedCart));
      }
      this.router.navigateByUrl("/shopping-cart")
    }
  
    catch(err){
      console.log(err)
    }
  }
}
