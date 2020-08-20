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
    <div className="bg-gray-100 flex  w-6/12 mx-auto my-1 max-w-sm">
      <div className="flex-1 p-4 bg-gray-100 border-solid border-r-2">
        <h1 className="text-center sm:text-xl text-sm text-black">INCOME</h1>
        <h1 className="text-center sm:text-2xl text-sm text-green-500">
          {income}
        </h1>
      </div>
      <div className="flex-1 p-4 bg-gray-100">
        <h1 className="text-center sm:text-xl text-sm text-black">EXPENSE</h1>
        <h1 className="text-center sm:text-2xl text-sm text-red-500">
          {expense}
        </h1>
      </div>
    </div>
  );
};
export default IncomeExpense;
