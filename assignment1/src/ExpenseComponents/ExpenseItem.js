import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
const ExpenseItem = (props) => {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.entry.date} />
      <div className="expense-item__description">
        <h2>{props.entry.title}</h2>
        <p className="expense-item__price">${props.entry.amount}</p>
      </div>
    </div>
  );
};

export default ExpenseItem;
