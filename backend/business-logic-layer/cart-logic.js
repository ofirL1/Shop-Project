require("../data-access-layer/dal");
const mongoose = require("mongoose");
const CartModel = require("../models/cart-model");


function getCartsAsync(){
    return CartModel.findOne().populate("customerId").sort({createDate: -1}).exec();
}

function addCartAsync(cart){
    return cart.save();
}

module.exports = {
    getCartsAsync,
    addCartAsync
}