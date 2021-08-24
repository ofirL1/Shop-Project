const mongoose = require("mongoose");

const CartItemSchema = mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "productId is required"],
        ref: "ProductModel"
    },
    quantity: {
        type: Number,
        required: [true, "quantity is required"],
    },
    price: {
        type: Number,
        required: [true, "price is required"],
    },
    cartId: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "cartId is required"],
        ref: "CartModel"
    }
}, { versionKey: false });

const CartItemModel = mongoose.model("CartItemModel", CartItemSchema, "cartItems");

module.exports = CartItemModel;