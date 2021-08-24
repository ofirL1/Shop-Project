const mongoose = require("mongoose");

const CustomerSchema = mongoose.Schema({
    _id:{
        type: String,
        maxLength: 9,
        minLength: 9,
    },
    firstName: {
        type: String,
        required: [true,"First name is required"],
        minLength: 2
    },
    lastName: {
        type: String,
        required: [true,"Last name is required"],
        minLength: 2
    },
    username: {
        type: String,
        required: [true,"Username is required"],
        minLength: 4,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true,"Password is required"],
        min: 6,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        required: [true,'Email address is requiredd'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    },
    city: {
        type: String,
        required: [true,"City is required"],
    },
    address:{
        type: String,
        required: [true,"Address is required"],
    },
    admin:{
        type: Boolean
    }

}, { versionKey: false });

const CustomerModel = mongoose.model("CustomerModel", CustomerSchema, "customers");

module.exports = CustomerModel;