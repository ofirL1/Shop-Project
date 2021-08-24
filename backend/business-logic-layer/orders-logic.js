require("../data-access-layer/dal");
const OrderModel = require("../models/order-model");


function getOrdersAsync(){
    return OrderModel.find().populate("customerId cartId").exec();
}

function getOrderByIdAsync(_id){
    return OrderModel.findById(_id).populate("customerId cartId").exec();
}

async function getOrdersCountAsync(){
    return await OrderModel.find().estimatedDocumentCount();
}


module.exports = {
    getOrdersAsync,
    getOrderByIdAsync,
    getOrdersCountAsync
}