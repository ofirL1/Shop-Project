import { UserModel } from './../../../models/user.model';
import { OrdersService } from './../../../services/orders.service';
import { ProductsService } from './../../../services/products.service';
import { Component, OnInit } from '@angular/core';
import store from 'src/app/redux/store';

@Component({
  selector: 'app-shop-information',
  templateUrl: './shop-information.component.html',
  styleUrls: ['./shop-information.component.scss']
})
export class ShopInformationComponent implements OnInit {
  
  public productCount: Number;
  public orderCount: Number;
  public user: UserModel = store.getState().authState.user;

  constructor(private ProductsService : ProductsService, private OrdersService: OrdersService) { }

  async ngOnInit(){
    this.productCount = await this.ProductsService.getProductsCount();
    this.orderCount = await this.OrdersService.getOrdersCount();
    
  }

}
