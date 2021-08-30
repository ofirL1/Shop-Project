import { ProductModel } from './product.model';
export class CartItemModel {
    public _id: string;
    public productId: ProductModel;
    public quantity: number;
    public price: number;
    public cartId: string;

    constructor(product: ProductModel, quantity: number){
        this.productId = product;
        this.quantity = quantity;
        this.price = product.price;
        this.cartId = JSON.parse(localStorage.getItem("activeCart"))._id;

    }
}
