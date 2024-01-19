import { transactionsAtom } from "../store/GlobalState";
import { useRecoilValue } from "recoil";
export function ExpenseIncome(){
  const transactions = useRecoilValue(transactionsAtom);
  const amount = transactions.map(t=>t.amount);
  const Income = amount.filter(item=>item>0).reduce((acc,item)=>(acc+=item),0).toFixed(2);
  const Expense = (amount.filter(item=>item<0).reduce((acc,item)=>(acc+=item),0)*-1).toFixed(2);
    return(
       <div className="inc-exp-container">
           <div>
            <h4>Income</h4>
            <p id="money-plus" className="moneyplus">+₹{Income}</p>
           </div>
           <div>
           <h4>Expense</h4>
            <p id="money-minus" className="moneyminus">-₹{Expense}</p>
            </div>
       </div> 

    );
}