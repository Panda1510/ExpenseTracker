import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./../UI/Card";
// import React, {useState} from 'react';

function ExpenseItem(props) {
  // const expenseDate = props.date;
  // const expenseTitle = props.title;
  const expenseAmount = props.amount;

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${expenseAmount}</div>
          {/* <button onClick = {clickHandler}>Change Title</button> */}
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
