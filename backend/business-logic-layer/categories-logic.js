require("../data-access-layer/dal");
const mongoose = require("mongoose");
const CategoryModel = require("../models/category-model");


function getCategoriesAsync(){
    return CategoryModel.find().exec();
}

function addCategoriesAsync(category){
    return category.save();
}

module.exports = {
    getCategoriesAsync,
    addCategoriesAsync
}