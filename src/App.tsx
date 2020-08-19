import React from 'react';
import logo from './logo.svg';
import './App.css';
import {TransactionProvider} from './Context/GlobalContext'
import Header from './Components/Header/Header'

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
