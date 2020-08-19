import React, {createContext , useReducer} from 'react'
// import { createContext ,useucer } from 'vm';
import {TransactionType , initialStateType} from '../Types/TransactionType';
import Reducer from './Reducer';

const initialState : initialStateType = {
    Transaction : [{id: 1 , text : 'Amount' , amount : 455}],
    deleteTransaction : () => {},
    addTransaction : () => {}
};

export const TransactionContext = createContext(initialState);

export const TransactionProvider: React.FC = ({children}) =>{
    const [state, dispatch] = useReducer(Reducer ,initialState);


    function deleteTransaction(id: number) {
        dispatch({
            type: 'Delete_Transaction',
            payload: id
        })
    }

    function addTransaction(transactionData : TransactionType) {
        dispatch({
            type: 'Add_Transaction',
            payload : transactionData
        })
    }

    return(
        <div>
    
         </div>
    )
}











