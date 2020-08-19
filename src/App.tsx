import React from 'react';
import logo from './logo.svg';
import './App.css';
import {TransactionProvider} from './Context/GlobalContext'
import Header from './Components/Header/Header'
import Balance from './Components/TrackerComponents/Balance' 
import IncomeExpense from './Components/TrackerComponents/IncomeExpense' 
import Transaction from './Components/TrackerComponents/Transaction' 


function App() {
  return (
    <TransactionProvider>
    <div className="App">
      <Header/>
    </div>
    </TransactionProvider>

  );
}

export default App;
