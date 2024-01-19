import { useState } from "react"; 
import { transactionsAtom } from "../store/GlobalState";
import { useRecoilState } from "recoil";

export function AddTransactions(){
    const[text,setText] = useState('');
    const [amount,setAmount]=useState(0);
    const [transactions, setTransactions] = useRecoilState(transactionsAtom);

    const addTransaction = () => {
        if (text.trim() === '') {
            alert('Please enter a valid text for the transaction.');
            return;
        }

        setTransactions((prevTransactions) => [
            ...prevTransactions,
            { id: prevTransactions.length + 1, text, amount: parseFloat(amount) || 0 }
        ]);

        setText('');
        setAmount(0);
    };
    return(
        <>
            <h3>Add new transactions</h3>
            <form>
                <div className="form-control">
                   <label htmlFor="text">Text</label>
                   <input type="text" placeholder="Enter text..." value={text} onChange={(e)=>{
                         setText(e.target.value)
                   }}></input>
                </div>
                <div className="form-control">
                    <label htmlFor="number" >Amount <br /></label>
                    <input type="number" placeholder="Enter amount..." value={amount} onChange={(e)=>{
                         setAmount(e.target.value)
                   }}></input>
                </div>
                <button type="button" className="btn" onClick={addTransaction}>Add Transactions</button>
            </form>
        </>
    );
}