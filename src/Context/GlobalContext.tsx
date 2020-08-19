import React, {useContext , useReducer} from 'react'
import { createContext } from 'vm';
import {TransactionType , initialStateType} from '../Types/TransactionType';
import Reducer from './Reducer';

const initialState : initialStateType = {
    Transaction : [{id: 1 , text : 'Amount' , amount : 455}],
    deleteTransaction : () => {},
    addTransaction : () => {}
};

export const TransactionContext = createContext(initialState)