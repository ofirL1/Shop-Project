const express = require("express");
const orderLogic = require("../business-logic-layer/orders-logic");
const OrderModel = require("../models/order-model");
const router = express.Router();


//GET http://localhost:3001/api/orders/count
router.get("/count", async (request,response) => {
    try{
        const ordersCount = await orderLogic.getOrdersCountAsync();
        response.json(ordersCount);    
    }
    catch(err){
        response.status(500).send(err.message);
    }
});

//GET http://localhost:3001/api/orders
router.get("/", async (request,response) => {
    try{
        const orders = await orderLogic.getOrdersAsync();
        response.json(orders);    
    }
    catch(err){
        response.status(500).send(err.message);
    }
});

//GET http://localhost:3001/api/orders/by_id
router.get("/:id", async (request,response) => {
    try{
        const _id = request.params.id;
        const order = await orderLogic.getOrderByIdAsync(_id);
        response.json(order);    
    }
    catch(err){
        response.status(500).send(err.message);
    }
});


module.exports = router;
