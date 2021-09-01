require("../data-access-layer/dal");
const mongoose = require("mongoose");
const CartItemModel = require("../models/cartItem-model");


function getCartItemAsync(){
    return CartItemModel.find().populate("productId cartId").exec();
}

async function addCartItemAsync(cartItem){
    const item = await CartItemModel.findOne({"productId": cartItem.productId, "cartId": cartItem.cartId}).populate("productId").exec();
    console.log("item",item);
    if(item){
        item.price = cartItem.price * cartItem.quantity + item.price;
        item.quantity = item.quantity + cartItem.quantity;
        const info = await CartItemModel.updateOne({ _id: item._id }, item).exec();
        console.log("info",item)
        return info.n ? item : null;
    }
    let x = await cartItem.save().then(c => c.populate("productId").execPopulate());
    console.log("x",x);
}

async function removeCartItemAsync(_id ,quantity){
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

async function removeAllCratItems(){

}

module.exports = {
    getCartItemAsync,
    addCartItemAsync,
    removeCartItemAsync
}