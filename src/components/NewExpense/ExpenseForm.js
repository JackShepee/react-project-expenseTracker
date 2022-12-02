import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnternedTitle] = useState("");
  const [enteredAmount, setEnternedAmount] = useState("");
  const [enteredDate, setEnternedDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //     enternedTitle: '',
  //     enternedAmount: '',
  //     enternedDate: ''
  // });

  const titleChangeHandler = (event) => {
    setEnternedTitle(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enternedTitle: event.target.value,
    // });
  };
  const amountChangeHandler = (event) => {
    setEnternedAmount(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enternedAmount: event.target.value,
    // });
  };
  const dateChangeHandler = (event) => {
    setEnternedDate(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enternedDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnternedTitle("");
    setEnternedAmount("");
    setEnternedDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
