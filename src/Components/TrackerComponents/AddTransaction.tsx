import { error } from 'console';
import React , {useState , useContext} from 'react'
import {TransactionContext} from '../../Context/GlobalContext';

const AddTransaction = () => {
    const [text, setText] = useState<string>("");
    const [amount, setAmount] = useState<number>(0);
  
  
    const { addTransaction } = useContext(TransactionContext);
  
    const OnSubmit = (e: { preventDefault: () => void }) => {
      e.preventDefault();
  
    if(text === "" ) {
        alert('Please Enter Text')
    }
    if( amount === 0 ) {
        alert(
            'Please Enter Amount'
        )
    }
    else {
        const newTransAdd = {
          id: Math.floor(Math.random() * 1000),
          text,
          amount: +amount,
          //   amount: amount,  text and amount both methods are same things
        };
        setText("");
        setAmount(0);
        addTransaction(newTransAdd);
      }
    };
  
    return (
        <div >
        <h1>Add new transaction</h1>
        <hr />
        <form onSubmit={OnSubmit}>
          <div >
            <label >Text</label>
            <div className="my-2">
              <input
                placeholder="Enter Text..."
                value={text}
                onChange={(e) => {
                  setText(String(e.target.value));
                //   setError({ ...error, textError: "" });
                }}
                type="text"
              />
              {/* <h1
                className={`text-red-500 ${
                  error.textError === "" ? "hidden" : "block"
                } `}
              >
                Text Is Required !
              </h1> */}
            </div>
          </div>
          <div>
            <label >Amount</label>
            <div >
              <input
                placeholder="Enter Amount..."
                value={amount === 0 ? "" : amount}
                onChange={(e) => {
                  setAmount(Number(e.target.value));
                //   setError({ ...error, AmountError: "" });
                }}
                type="number"
              />
              {/* <h1
                className={`text-red-500 ${
                  error.AmountError === "" ? "hidden" : "block"
                } `}
              >
                {" "}
                Amount Is Required !
              </h1> */}
            </div>
          </div>
          <div className="block">
            <input
              type="Submit"
            />
          </div>
        </form>
      </div>
    )
}

export default AddTransaction
