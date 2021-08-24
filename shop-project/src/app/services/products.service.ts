import { ProductModel } from './../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CategoryModel } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http : HttpClient) { }

  public async getProductsCount(){
    return await this.http.get<Number>(environment.productsCount).toPromise();
  }

  public async getCategories(){
    return await this.http.get<CategoryModel[]>(environment.categoriesUrl).toPromise();
  }
  public async getProducts(){
    return await this.http.get<ProductModel[]>(environment.productsUrl).toPromise();
  }
  public async getProductsByCategoryId(_id: string){
    return await this.http.get<ProductModel[]>(environment.productsByCategoryId + _id).toPromise();
  }

  public async getProductsByName(name: string){
    return await this.http.get<ProductModel[]>(environment.productsByName + name).toPromise();
  }


}
