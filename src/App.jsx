import { Header } from "./componets/Header";
import { Balance } from "./componets/Balance";
import { ExpenseIncome } from "./componets/ExpenseIncome";
import { Trasactionlist } from "./componets/Trasactionlist";
import { AddTransactions } from "./componets/AddTransactions";
import "./App.css";
import { RecoilRoot } from "recoil";

function App() {
 
  return (
    <>
    <RecoilRoot>
    <Header />
     <div className="container">
      <Balance />
      <ExpenseIncome />
      <Trasactionlist />
      <AddTransactions />
     </div>
    </RecoilRoot>
    </>
  )
}

export default App;
