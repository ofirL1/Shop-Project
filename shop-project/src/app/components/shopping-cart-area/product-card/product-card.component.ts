import { CartService } from './../../../services/cart.service';
import { ProductModel } from './../../../models/product.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent  {

  @Input()
  public product: ProductModel;

  public productQuantity: number = 1;

  constructor(private CartService: CartService) { }

  public addProductToCart(){
    console.log("quantity input",this.productQuantity)
    const addedItem = this.CartService.addCartItem(this.product, this.productQuantity);
    
  }

}
