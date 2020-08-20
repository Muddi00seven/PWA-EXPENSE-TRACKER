import React, { useState, useContext } from "react";
import { TransactionContext } from "../../Context/GlobalContext";

const AddTransaction = () => {
  const [text, setText] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);

  const { addTransaction } = useContext(TransactionContext);

  const OnSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
if(amount === 0) {
  alert('dsadsa')
}
     else {
      const newTransAdd = {
        id: Math.floor(Math.random() * 1000),
        text,
        amount: +amount,
        //   amount: amount,  text and amount both methods are same things
      };
      setText("");
      setAmount(0);
      addTransaction(newTransAdd);
    }
  };

  return (
    <div>
     
      <h3>Add new transaction</h3>
      <form onSubmit={OnSubmit}>
        <div className="form-control">
          <label htmlFor="text">Transaction Belongs To</label>
          <input type="text"   value={text}
              onChange={(e) => {
                setText(String(e.target.value));
              }} placeholder="Details...." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
              Amount </label >
          <input type="number"   value={amount === 0 ? "" : amount}
              onChange={(e) => {
                setAmount(Number(e.target.value));
              }} placeholder="Enter amount..." />
        </div>
        <button className="btn">Submit Transaction</button>
      </form>
    </div>
  );
};
export default AddTransaction;
