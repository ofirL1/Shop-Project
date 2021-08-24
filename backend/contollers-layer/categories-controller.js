const express = require("express");
const categoryLogic = require("../business-logic-layer/categories-logic");
const CategoryModel = require("../models/category-model");
const router = express.Router();

//GET http://localhost:3001/api/categories
router.get("/", async (request,response) => {
    try{
        const categories = await categoryLogic.getCategoriesAsync();
        response.json(categories);    
    }
    catch(err){
        response.status(500).send(err.message);
    }
});

//POST http://localhost:3001/api/categories
router.post("/", async (request,response) => {
    try{
        const category = new CategoryModel(request.body)
        const errors = category.validateSync();
        if (errors) return response.status(400).send(errors.message);

        const addedCategory = await categoryLogic.addCategoriesAsync(category);
        response.json(addedCategory);    
    }
    catch(err){
        response.status(500).send(err.message);
    }
});

module.exports = router;
