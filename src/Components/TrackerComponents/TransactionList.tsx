import React , { useContext} from 'react'
import {TransactionContext} from '../../Context/GlobalContext';
import { TransactionType } from "../../Types/TransactionType";
import TransactionDel from './Transaction';

const TransactionalList = () => {
  const { Transaction } = useContext(TransactionContext);

  return (
    <div>
        <h3>History</h3>
      <ul className="list">
      {Transaction.map((trans: TransactionType) => (
        <TransactionDel trans={trans} key={trans.id} />
      ))}      </ul>
    </div>
  );
};
export default TransactionalList;
