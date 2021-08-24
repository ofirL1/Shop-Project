const CartModel = require("../models/cart-model");
const OrderModel = require("../models/order-model");

async function checkCartActiveAsync(_id){
    const activeCart = await CartModel.findOne({"customerId": _id}).populate("customerId").sort({createDate: -1}).exec();
    if(activeCart){
        const checkIfHaveOrder = await OrderModel.find({"cartId._id": activeCart._id}).populate("cartId").exec();
        console.log(checkIfHaveOrder);
        if(checkIfHaveOrder.length === 0){
            console.log(activeCart)
            return {isActiveCart: true, createdDate: activeCart.createDate};
        }
        return {isActiveCart: false, lastOrder: checkIfHaveOrder};
    }
}

module.exports = {
    checkCartActiveAsync
}
