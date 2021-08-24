const express = require("express");
const cartLogic = require("../business-logic-layer/cart-logic");
const CartModel = require("../models/cart-model");
const router = express.Router();

//GET http://localhost:3001/api/cart
router.get("/", async (request,response) => {
    try{
        const cart = await cartLogic.getCartsAsync();
        response.json(cart);    
    }
    catch(err){
        response.status(500).send(err.message);
    }
});

//POST http://localhost:3001/api/cart
router.post("/", async (request,response) => {
    try{
        const cart = new CartModel(request.body)
        const errors = cart.validateSync();
        if (errors) return response.status(400).send(errors.message);

        const addedCart = await cartLogic.addCartAsync(cart);
        response.json(addedCart);    
    }
    catch(err){
        response.status(500).send(err.message);
    }
});

module.exports = router;
