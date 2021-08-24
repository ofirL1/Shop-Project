require("../data-access-layer/dal");
const mongoose = require("mongoose");
const ProductModel = require("../models/product-model");


function getProductsAsync(){
    return ProductModel.find().populate("categoryId").exec();
}

function getProductsByCategoryIdAsync(_id){
    return ProductModel.find({"categoryId": _id}).populate("categoryId").exec();
}

function getProductsByNameAsync(name){
    return ProductModel.find({"name": { $regex: name}}).populate("categoryId").exec();
}


function addProductAsync(product){
    return product.save();
}

async function getProductsCountAsync(){
    return await ProductModel.find().estimatedDocumentCount();
}

module.exports = {
    getProductsAsync,
    getProductsByCategoryIdAsync,
    getProductsByNameAsync,
    addProductAsync,
    getProductsCountAsync
}