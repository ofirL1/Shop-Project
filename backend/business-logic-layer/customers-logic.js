require("../data-access-layer/dal");
const CustomerModel = require("../models/customer-model");

function getCustomersAsync(){
    return CustomerModel.find().exec();
}

function getCustomerByIdAsync(_id){
    return CustomerModel.findById(_id).exec();
}



module.exports = {
    getCustomersAsync,
    getCustomerByIdAsync
}