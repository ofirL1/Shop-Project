require("../data-access-layer/dal");
const mongoose = require("mongoose");
const CartItemModel = require("../models/cartItem-model");


function getCartItemAsync(){
    return CartItemModel.find().populate("productId cartId").exec();
}

function addCartItemAsync(cartItem){
    return cartItem.save();
}

module.exports = {
    getCartItemAsync,
    addCartItemAsync
}