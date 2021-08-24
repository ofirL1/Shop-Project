const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true,"Product name is required"],
        minLength: 2
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true,"CategoryId is required"],
        ref: "CategoryModel"
    },
    price: {
        type: Number,
        required: [true,"Price is required"],
        min: 0,
    },
    imagePath: {
        type: String
    }
}, { versionKey: false });

const ProductModel = mongoose.model("ProductModel", ProductSchema, "products");

module.exports = ProductModel;