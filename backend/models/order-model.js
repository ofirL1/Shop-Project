const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true,"customerId is required"],
        ref: "CustomerModel"
    },
    cartId:{
        type: mongoose.Schema.Types.ObjectId,
        required: [true,"cartId is required"],
        ref: "CartModel"
    },
    price:{
        type: Number,
        required: [true,"price is required"],
    },
    shippingCity:{ 
        type: String,
        required: [true,"Shipping city is required"],
    },
    shippingAddress:{
        type: String,
        required: [true,"Shipping address is required"],
    },
    shippingDate:{
        type: Date,
        required: [true,"Shipping date is required"],
    },
    orderDate:{
        type: Date,
        required: [true,"Order date is required"],
    },
    lastDigits:{
        type: Number,
        required: [true,"Last digits is required"],
    }

}, { versionKey: false });

const OrderModel = mongoose.model("OrderModel", OrderSchema, "orders");

module.exports = OrderModel;