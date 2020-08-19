import React , { useContext} from 'react';
import {TransactionContext} from '../../Context/GlobalContext';

const Balance = () => {
    const {Transaction} = useContext(TransactionContext);
    const allAmount = Transaction.map((allAmount) => allAmount.amount)
    const totalAmount = allAmount.reduce((a,b) => (a+=b) , 0).toFixed(2)
    return (
        <div>
            <h1>Your Balance</h1>
            <h1 >${totalAmount}</h1>
        </div>
    )
}

export default Balance
