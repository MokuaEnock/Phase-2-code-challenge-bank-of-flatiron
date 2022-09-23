import React, { useState } from "react";
import Data from "../db.json";

function App() {
  let [trans, useTrans] = useState(Data);
  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <AccountContainer />
    </div>
  );
}

function AccountContainer({ trans }) {
  let data = Data.transactions;
  console.log(data);
  return (
    <div>
      <Search />
      <AddTransactionForm />
      <TransactionsList />
    </div>
  );
}

function AddTransactionForm(setTrans) {
  function handleSubmit(event) {
    event.preventDefault();
    let inputDate = event.target.elements.index.value;
    let inputDescription = event.target.elements.index.value;
    let inputCategory = event.target.elements.index.value;
    let inputAmount = event.target.elements.index.value;
    console.log(inputDate, inputDescription, inputAmount, inputCategory);
  }
  return (
    <div className="ui segment">
      <form className="ui form">
        <div className="inline fields">
          <input type="date" name="date" />
          <input type="text" name="description" placeholder="Description" />
          <input type="text" name="category" placeholder="Category" />
          <input type="number" name="amount" placeholder="Amount" step="0.01" />
        </div>
        <button className="ui button" type="submit" onClick={handleSubmit}>
          Add Transaction
        </button>
      </form>
    </div>
  );
}

function Search({ trans }) {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={() => console.log("Searching...")}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

function TransactionsList({ trans }) {
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {/* render a list of <Transaction> components here */}
      </tbody>
    </table>
  );
}

export default App;
