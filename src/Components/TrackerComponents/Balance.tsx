import React, { useContext } from "react";
import { TransactionContext } from "../../Context/GlobalContext";

const Balance = () => {
  const { Transaction } = useContext(TransactionContext);

  const allAmounts = Transaction.map((allAmount) => allAmount.amount);
  const total = allAmounts.reduce((a, b) => (a += b), 0).toFixed(2);

  return (
    <div>

      <h4>Your Balance</h4>
    <h1>${total}</h1>
    </div>
    
  );
};

export default Balance;
