import "./ExpenseForm.css";
import React, { useState } from "react";

function ExpenseForm(props) {
  // This was done using 3 different states:
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault(); // stopping the page from reloading

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    // console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  //MY LOGIC TO DO THE ASSIGNMENT FOR TOGGLING THE FORM
  // const [isAddClicked, toggleAddClicked]= useState(false);

  // const openAddExpense = (isAddClicked) => {
  //   toggleAddClicked((prevAddClicked) => {
  //     return !prevAddClicked;
  //   });
  // }

  // const closeAddExpense = (isAddClicked) => {
  //   toggleAddClicked((prevAddClicked) => {
  //     return !prevAddClicked;
  //   });
  // }

  // if(!isAddClicked) {
  //   return <button type="submit" onClick = {openAddExpense}>Add New Expense</button>
  // }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title: </label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
            required />
        </div>
        <div className="new-expense__control">
          <label>Amount: </label>
          <input
            type="number"
            value = {enteredAmount}
            min="0.01"
            step="0.01"
            required
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date: </label>
          <input
            type="date"
            value = {enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            required
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick = {props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
