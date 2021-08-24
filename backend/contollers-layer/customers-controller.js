const express = require("express");
const customerLogic = require("../business-logic-layer/customers-logic");
const CustomerModel = require("../models/customer-model");
const router = express.Router();

//GET http://localhost:3001/api/customers
router.get("/", async (request,response) => {
    try{
        const customers = await customerLogic.getCustomersAsync();
        response.json(customers);    
    }
    catch(err){
        response.status(500).send(err.message);
    }
});

//GET http://localhost:3001/api/customers/by_id
router.get("/:id", async (request,response) => {
    try{
        const _id = request.params.id;
        const customer = await customerLogic.getCustomerByIdAsync(_id);
        if(!customer) return response.status("409").send("ID not exist");
        response.json(customer);    
    }
    catch(err){
        response.status(500).send(err.message);
    }
});

module.exports = router;
