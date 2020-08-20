import React, { useContext } from "react";
import { TransactionContext } from "../../Context/GlobalContext";

const IncomeExpense = () => {
  const { Transaction } = useContext(TransactionContext);

  const amount = Transaction.map((trans) => trans.amount);

  //.toFixed was making its datatype to string so  i used ParseInt to make it a number data type
  const income: number = parseInt(
    amount
      .filter((a) => a > 0)
      .reduce((v1, v2) => (v1 += v2), 0)
      .toFixed(2)
  );

  const expense: number = parseInt(
    amount
      .filter((a) => a < 0)
      .reduce((v1, v2) => (v1 += v2 * -1), 0)
      .toFixed(2)
  );

  return (
    <div>
  

      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
  <p className="money plus">{income}</p>
        </div>
        <div>
          <h4>Expense</h4>
  <p className="money minus">{expense}</p>
        </div>
      </div>
    </div>
  );
};
export default IncomeExpense;
