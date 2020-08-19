import React , { useContext} from 'react';
import {TransactionContext} from '../../Context/GlobalContext';

const IncomeExpense = () => {
    const {Transaction} = useContext(TransactionContext);
    const amount = Transaction.map((trans) => trans.amount)

    const income : number = parseInt(
        amount
        .filter((a) => a > 0)
        .reduce((v1, v2) => (v1 += v2), 0)
        .toFixed(2) 
        );

    const expense : number = parseInt(
        amount
        .filter((a) => a < 0)
        .reduce((v1, v2) => (v1 += v2 * -1), 0)
        .toFixed(2)
    );



    return (
        <div>
            <h1>
                Income
            </h1>
            <h1>
                {income}
            </h1>
            <h1>
                Expense
            </h1>
            <h1>
                {expense}
            </h1>
        </div>
    )
}

export default IncomeExpense
