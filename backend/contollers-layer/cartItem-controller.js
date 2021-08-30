const express = require("express");
const cartItemLogic = require("../business-logic-layer/cartItem-logic");
const CartItemModel = require("../models/cartItem-model");
const router = express.Router();

//GET http://localhost:3001/api/cart/item
router.get("/", async (request,response) => {
    try{
        const cartItems = await cartItemLogic.getCartItemAsync();
        response.json(cartItems);    
    }
    catch(err){
        response.status(500).send(err.message);
    }
});

//POST http://localhost:3001/api/cart/item
router.post("/", async (request,response) => {
    try{
        const cartItem = new CartItemModel(request.body)
        console.log(cartItem);
        const errors = cartItem.validateSync();
        if (errors) return response.status(400).send(errors.message);

        const addedCartItem = await cartItemLogic.addCartItemAsync(cartItem);
        response.json(addedCartItem);    
    }
    catch(err){
        response.status(500).send(err.message);
    }
});

//POST http://localhost:3001/api/cart/item/:id/:quantity
router.delete("/:_id/:quantity", async (request,response) => {
    try{
        const quantity = +request.params.quantity;
        const _id = request.params._id; 

        await cartItemLogic.removeCartitemAsync(_id,quantity);
        response.sendStatus(204);    
    }
    catch(err){
        response.status(500).send(err.message);
    }
});

module.exports = router;
