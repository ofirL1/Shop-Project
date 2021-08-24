const express = require("express");
const CustomerModel = require("../models/customer-model");
const authLogic = require("../business-logic-layer/auth-logic");
const CredentialsModel = require("../models/credentials-model");
const activeCartHelper = require("../helpers/activeCart-helper");
const router = express.Router();

//POST http://localhost:3001/api/auth/register
router.post("/register", async (request,response) => {
    try{
        const customer = new CustomerModel(request.body);

        const errors = customer.validateSync();
        if (errors){
            console.log(errors.message)
            return response.status(400).send(errors.message);
        } 
        
        const addedCustomer = await authLogic.registerAsync(customer);
        response.status(201).json(addedCustomer);    
    }
    catch(err){
        console.log(err.message)
        response.status(500).send(err.message);
    }
});

//POST http://localhost:3001/api/auth/login
router.post("/login", async (request,response) => {
    try{
        const credentials = new CredentialsModel(request.body);
        const loginUser = await authLogic.loginAsync(credentials);

        if(!loginUser) return response.status(404).send("Incorrect username or password");
        console.log(loginUser);
        const checkActiveCart = await activeCartHelper.checkCartActiveAsync(loginUser._id);
        console.log(checkActiveCart);
        response.json({loginUser,activeCart: checkActiveCart});    
    }
    catch(err){
        response.status(500).send(err.message);
    }
});

//GET http://localhost:3001/api/auth/register/validateIdAndEmail
router.post("/register/validateIdAndEmail", async (request,response) => {
    try{
        const isValidate = await authLogic.validateIdAndEmailAsync(request.body);
        // if(isValidate) return response.status(403).json(isValidate);
        response.json(isValidate);    
    }
    catch(err){
        response.status(500).send(err.message);
    }
});



module.exports = router;