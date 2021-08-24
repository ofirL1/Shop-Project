import { ProductModel } from './../../../models/product.model';
import { ProductsService } from './../../../services/products.service';
import { CategoryModel } from './../../../models/category.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  public categories: CategoryModel[];
  public products: ProductModel[];
  public searchBarValue: string;
  constructor(private ProductsService : ProductsService) { }

  async ngOnInit(){
    try{
      this.categories = await this.ProductsService.getCategories();
      this.products = await this.ProductsService.getProducts();
    }
    catch(err){
      console.log(err)
    }
  }

  public async getProductsByCartegoryId(args: any){
    try{
      const categoryId = args.target.value;
      this.products = await this.ProductsService.getProductsByCategoryId(categoryId);  
    }
    catch(err){
      console.log(err)
    }
  }

  public async getProductsByName(){
    if(this.searchBarValue){
      this.products = await this.ProductsService.getProductsByName(this.searchBarValue);
    }
  }

}
