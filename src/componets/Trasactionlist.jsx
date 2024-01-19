import { deleteTransaction } from "../store/GlobalState";
import { transactionsAtom } from "../store/GlobalState";
import { useRecoilState } from "recoil";

export function Trasactionlist(){
   const [transactions, setTransactions] = useRecoilState(transactionsAtom);

   const handleDelete = (id) => {
       setTransactions(deleteTransaction(id));
   };

   const sign = transactions.amount<0?'-':'+';
   
    
    return (
       <>
        <h3>History</h3>
        <ul className="list">
        {transactions.map(t=>(
         <li className={t.amount<0 ?'minus':'plus'}>
        {t.text}<span>{sign}₹{Math.abs(t.amount)}</span><button onClick={() => handleDelete(t.id)} className="delete-btn">x</button>
        </li>
        ))}
        </ul>
       </>
    );
}