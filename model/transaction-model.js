
const mongoose = require("mongoose")

const transactionSchema = new mongoose.Schema (
    {
 transactionType:{ type: String, enum:["credit", "debit"], required: true },
   
    amount: { type: Number, required: true},
    
}, {timestamp: true})

const transaction = new mongoose.model("transaction", transactionSchema)

module.exports = transaction
