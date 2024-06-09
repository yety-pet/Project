const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({

    fullName: { type: String, required: true},
   
    email: { type: String, required: true, unique: true},
    
    password: {type: String, required: true},

    phoneNumber: { type: String, required: true},
    
    balance: { type: String, default: 0},

    active: { type: Boolean, default: true},


}, {timestamps: true})

const Users = new mongoose.model("Users", userSchema)


module.exports = Users