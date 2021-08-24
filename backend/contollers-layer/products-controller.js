const express = require("express");
const productsLogic = require("../business-logic-layer/products-logic");
const ProductModel = require("../models/product-model");
const router = express.Router();

//GET http://localhost:3001/api/products
router.get("/", async (request,response) => {
    try{
        const products = await productsLogic.getProductsAsync();
        response.json(products);    
    }
    catch(err){
        response.status(500).send(err.message);
    }
});

//GET http://localhost:3001/api/products/byCategoryId/_id
router.get("/byCategoryId/:_id", async (request,response) => {
    try{
        const _id = request.params._id;
        const products = await productsLogic.getProductsByCategoryIdAsync(_id);
        response.json(products);    
    }
    catch(err){
        response.status(500).send(err.message);
    }
});

//GET http://localhost:3001/api/products/byName/name
router.get("/byName/:name", async (request,response) => {
    try{
        const name = request.params.name;
        console.log(name)
        const products = await productsLogic.getProductsByNameAsync(name);
        response.json(products);    
    }
    catch(err){
        response.status(500).send(err.message);
    }
});


//POST http://localhost:3001/api/products
router.post("/", async (request,response) => {
    try{
        const product = new ProductModel(request.body)
        const errors = product.validateSync();
        if (errors) return response.status(400).send(errors.message);

        const addedProduct = await productsLogic.addProductAsync(product);
        response.json(addedProduct);    
    }
    catch(err){
        response.status(500).send(err.message);
    }
});

//GET http://localhost:3001/api/products/count
router.get("/count", async (request,response) => {
    try{
        const productsCount = await productsLogic.getProductsCountAsync();
        response.json(productsCount);    
    }
    catch(err){
        response.status(500).send(err.message);
    }
});

module.exports = router;
