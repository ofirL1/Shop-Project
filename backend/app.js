global.config = require(process.env.NODE_ENV === "production" ? "./config-prod": "./config-dev.json");
const express = require("express");
const cors = require("cors");
const authController = require("./contollers-layer/auth-controller");
const customerController = require("./contollers-layer/customers-controller");
const categoriesController = require("./contollers-layer/categories-controller");
const productsController = require("./contollers-layer/products-controller");
const cartController = require("./contollers-layer/cart-controller");
const cartItemController = require("./contollers-layer/cartItem-controller");
const ordersController = require("./contollers-layer/orders-controller");



const server = express();
server.use(cors());
server.use(express.json());

server.use("/api/auth",authController);
server.use("/api/customers",customerController);
server.use("/api/categories",categoriesController);
server.use("/api/products",productsController);
server.use("/api/cart",cartController);
server.use("/api/cart/item",cartItemController);
server.use("/api/orders",ordersController);


const port = process.env.PORT || 3001;

server.listen(port,() => {
    console.log("Listening on port: " + port)
})