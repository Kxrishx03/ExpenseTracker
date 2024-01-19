import { useRecoilValue } from "recoil";
import { transactionsAtom } from "../store/GlobalState";
export function Balance(){
  const transactions = useRecoilValue(transactionsAtom);
  const amount = transactions.map(t=>t.amount);
  const total = amount.reduce((acc,item)=>(acc+=item),0).toFixed(2);
    return(
         <>
            <h4>Your Balance</h4> 
           <h1 id="balance">₹{total}</h1>
           
         </>
    );
}