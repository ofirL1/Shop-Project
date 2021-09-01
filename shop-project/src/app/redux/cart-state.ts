import { CartItemModel } from './../models/cart-item.model';
import { CartModel } from './../models/cart.model';

// Cart State: 
export class CartState {
    public ProductsCartItems: CartItemModel[] = [];
}

// Cart Action Types: 
export enum CartActionType {
    CartItemsDownloaded = "CartItemDownloaded",
    CartItemAdded = "CartItemAdded",
    CartItemRemoved = "CartItemRemoved",
}

// Cart Action: 
export interface CartAction {
    type: CartActionType;
    payload?: any;
}

// Cart Action Creators: 
export function cartDownloadedItems(items: CartItemModel[]): CartAction {
    return { type: CartActionType.CartItemsDownloaded, payload: items };
}
export function cartAddedItem(item: CartItemModel): CartAction {
    return { type: CartActionType.CartItemAdded, payload: item };
}
export function cartRemoveItem(item: CartItemModel): CartAction {
    return { type: CartActionType.CartItemRemoved, payload: item };
}


// Cart Reducer: 
export function cartReducer(currentState: CartState = new CartState(), action: CartAction): CartState {

    const newState = { ...currentState };

    switch (action.type) {
        case CartActionType.CartItemsDownloaded:
            newState.ProductsCartItems = action.payload;
            break;       
        case CartActionType.CartItemAdded:
            const productExistInCart = newState.ProductsCartItems.find(p => p.productId.name === action.payload.productId.name); // find product by name
            if (!productExistInCart) {
                newState.ProductsCartItems.push(action.payload);
                break;
              }
            const productExistInCartIndex = newState.ProductsCartItems.findIndex(p => p.productId.name === action.payload.productId.name); // find product by name
            newState.ProductsCartItems[productExistInCartIndex].quantity = action.payload.quantity;
            newState.ProductsCartItems[productExistInCartIndex].price = action.payload.price;

            break;
        case CartActionType.CartItemRemoved: { 
            const index = newState.ProductsCartItems.findIndex(p => p._id === action.payload);
            newState.ProductsCartItems.splice(index, 1);
            break;
        }
    }

    return newState;
}