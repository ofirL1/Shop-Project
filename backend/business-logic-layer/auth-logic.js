require("../data-access-layer/dal");
const CustomerModel = require("../models/customer-model");
const cryptoHelper = require("../helpers/crypto-helper");
const jwtHelper = require("../helpers/jwt-helper");

async function registerAsync(user){
    user.password = cryptoHelper.hash(user.password);
    let registerUser = await user.save(user);

    registerUser = registerUser.toObject();
    registerUser.token = jwtHelper.getNewToken(loginUser);

    delete registerUser._id;
    delete registerUser.password;

    return registerUser;
}

 async function loginAsync(credentials){
    credentials.password = cryptoHelper.hash(credentials.password);
    let loginUser = await CustomerModel.findOne({"username": credentials.username, "password": credentials.password }," -password").exec();
    loginUser = loginUser.toObject();
    loginUser.token = jwtHelper.getNewToken(loginUser);

    // delete loginUser._id;
    // delete loginUser.password;

    return loginUser;
}

async function validateIdAndEmailAsync(user){
    return await CustomerModel.findOne({$or: [{"_id": user._id}, {"email": user.email}, {"username": user.username.toLowerCase()}]}).exec().then(data => {
        const errors = {};
        if(data?._id === user._id){
            errors._id = "ID Exist";
        }
        if(data?.email === user.email){
            errors.email = "Email Exist";
        }
        if(data?.username=== user.username.toLowerCase()){
            errors.username = "Username Exist";
        }
        return errors;
    });
}


module.exports = {
    registerAsync,
    loginAsync,
    validateIdAndEmailAsync
}