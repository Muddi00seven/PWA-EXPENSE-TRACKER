import React from 'react';
import './App.css';
import {TransactionProvider} from './Context/GlobalContext'
import Header from './Components/Header/Header'
import Balance from './Components/TrackerComponents/Balance' 
import IncomeExpense from './Components/TrackerComponents/IncomeExpense' 
// import Transactions from './Components/TrackerComponents/Transaction' 
import  TransactionalList from './Components/TrackerComponents/TransactionList';
import AddTransaction from './Components/TrackerComponents/AddTransaction'
import firebase from './Firebase'
function App() {
  const messaging = firebase.messaging();
  messaging.requestPermission().then(() => {
    return messaging.getToken()
  }).catch((err) => (console.log('error' , err)))

  return (
    <TransactionProvider>
    <div className="App">
      <Header/>
      <Balance/>
      <IncomeExpense/>
      <TransactionalList/>
      <AddTransaction/>
    </div>
    </TransactionProvider>

  );
}

export default App;
