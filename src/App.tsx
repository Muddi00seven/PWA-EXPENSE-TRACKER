import React from 'react';
import logo from './logo.svg';
import './App.css';
import {TransactionProvider} from './Context/GlobalContext'
import Header from './Components/Header/Header'
import Balance from './Components/TrackerComponents/Balance' 
import IncomeExpense from './Components/TrackerComponents/IncomeExpense' 
import Transaction from './Components/TrackerComponents/Transaction' 
import  TransactionList from './Components/TrackerComponents/TransactionList';
import AddTransaction from './Components/TrackerComponents/AddTransaction'
function App() {
  return (
    <TransactionProvider>
    <div className="App">
      <Header/>
      <Balance/>
      <TransactionList/>
      <AddTransaction/>
    </div>
    </TransactionProvider>

  );
}

export default App;
