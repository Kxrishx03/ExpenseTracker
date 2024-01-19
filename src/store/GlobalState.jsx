import { atom ,selector} from "recoil";

export const transactionsAtom = atom({
    key:"transactionAtom",
    default:[
        {id:1,text:"Books",amount:-400},
        {id:2,text:"Pocket-money",amount:1000},
        {id:3,text:"Burger",amount:-200},
        {id:4,text:"Bonus",amount:500},
    ]
});
export const deleteTransaction = (idToDelete) => (prevTransactions) =>
    prevTransactions.filter((transaction) => transaction.id !== idToDelete);