const zod = require("zod");

const createTransaction = zod.object({
    text:zod.string(),
    amount:zod.number()
});

module.exports={
     createTransaction:createTransaction
}