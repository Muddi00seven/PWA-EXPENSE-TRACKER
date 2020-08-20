import React, { useContext } from "react";
import { TransactionContext } from "../../Context/GlobalContext";
// type
import { TransactionPropType } from "../../Types/TransactionType";

const TransactionDel: React.FC<TransactionPropType> = ({ trans }) => {
  // calling context

  const { deleteTransaction } = useContext(TransactionContext);

  return (
    <div className="flex ">


      <li className={trans.amount < 0 ? 'minus' : 'plus'}>
      {trans.text} <span>  {trans.amount < 0 ? "-" : "+"}${Math.abs(trans.amount)}
</span>
      <button onClick={() => deleteTransaction(trans.id)} className="delete-btn">x</button>
    </li>
    </div>

    
  );
};

export default TransactionDel;
