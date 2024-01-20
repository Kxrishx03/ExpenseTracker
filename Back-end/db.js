const mongoose = require('mongoose');
require('dotenv').config();

//mongoose-Database
mongoose.connect('mongodb://127.0.0.1:27017/TransactionDB');

const transactionsSchema = new mongoose.Schema({
    text:String,
    amount:Number,  
});

const Transaction = mongoose.model('transaction',transactionsSchema);

module.exports={
    Transaction
}