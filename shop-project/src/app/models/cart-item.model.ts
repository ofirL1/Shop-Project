import { ProductModel } from './product.model';
export class CartItemModel {
    public _id: string;
    public productId: ProductModel;
    public quantity: number;
    public price: number;
}
