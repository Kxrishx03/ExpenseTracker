const mongoose = require('mongoose');
require('dotenv').config();

//mongoose-Database
mongoose.connect('MongoURL');

const transactionsSchema = new mongoose.Schema({
    text:String,
    amount:Number,  
});

const Transaction = mongoose.model('transaction',transactionsSchema);

module.exports={
    Transaction
}