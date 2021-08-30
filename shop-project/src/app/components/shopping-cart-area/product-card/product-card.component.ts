import { CartService } from './../../../services/cart.service';
import { ProductModel } from './../../../models/product.model';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { QuantityDialogComponent } from './quantity-dialog/quantity-dialog.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent  {

  @Input()
  public product: ProductModel;

  public productQuantity: number;

  constructor(private CartService: CartService, public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(QuantityDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.productQuantity = result;      
        this.addProductToCart();
      }
    });

  }
  public async addProductToCart(){
    const addedItem = await this.CartService.addCartItem(this.product, this.productQuantity);
    
  }

}



