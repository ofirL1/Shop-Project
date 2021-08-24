const mongoose = require("mongoose");

const CartSchema = mongoose.Schema({
    customerId: {
        type: String,
        required: [true,"customerId is required"],
        ref: "CustomerModel"
    },
    createDate: {
        type: Date,
        required: [true,"createDate is required"],
    },
}, { versionKey: false });

const CartModel = mongoose.model("CartModel", CartSchema, "shoppingCart");

module.exports = CartModel;