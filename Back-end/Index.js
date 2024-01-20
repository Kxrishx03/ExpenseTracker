const express = require(express);
const { createTransaction } = require("./types");
const cors = require("cors");
const app = express();
const {  Transaction } = require("./db");
const port = 3000;

app.use(express.json());
app.use(cors({
    
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200 
  }
));

app.get('/transaction', async (req,res)=>{
    const Transactions =  await Transaction.find();
    res.status(200).json(Transactions);
});

app.post('/transactions', async (req,res)=>{
    const createPayLoad = req.body;
    const parsedPayLoad = createTransaction.safeParse(createPayLoad);

    if(!parsedPayLoad.success){
        res.status(411).json({Error:"Invalid inputs"});
    }else{
        //put it data base
        await Transaction.create({
            text:createPayLoad.text,
            amount:createPayLoad.amount,
           
        })
         res.status(200).json({msg:"Transaction has been added"});
    }
})

app.listen(port,()=>{
    console.log("Running on  " + port);
})