require("../data-access-layer/dal");
const mongoose = require("mongoose");
const CartItemModel = require("../models/cartItem-model");


function getCartItemAsync(){
    return CartItemModel.find().populate("productId cartId").exec();
}

async function addCartItemAsync(cartItem){
    const item = await CartItemModel.findOne({"productId": cartItem.productId, "cartId": cartItem.cartId}).exec();
    console.log("item",item);
    if(item){
        item.price = cartItem.price * cartItem.quantity + item.price;
        item.quantity = item.quantity + cartItem.quantity;
        const info = await CartItemModel.updateOne({ _id: item._id }, item).exec();
        return info.n ? item : null;
    }
    return cartItem.save();
}

async function removeCartitemAsync(_id ,quantity){
    const item = await CartItemModel.findById({_id}).populate("productId").exec();
    console.log(item.quantity === quantity);
    console.log(typeof item.quantity)
    console.log(typeof quantity)

    if(item.quantity === quantity){
      return await CartItemModel.deleteOne({_id}).exec();
    }
    item.quantity = item.quantity - quantity;
    item.price = item.productId.price * item.quantity;
    const info = await CartItemModel.updateOne({ _id: _id }, item).exec();
    return info.n ? item : null;

}

module.exports = {
    getCartItemAsync,
    addCartItemAsync,
    removeCartitemAsync
}