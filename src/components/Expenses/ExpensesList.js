import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
const ExpensesList = (props) => {
  // logic is used here.

  if(props.filteredItems.length === 0) {
      return (<p className="expenses-list__fallback">No Expenses Found.</p>);
  }

  return (
    <ul className="expenses-list">
      {props.filteredItems.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
