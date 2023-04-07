import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  console.log(props[0]);
  return (
    <div className="expenses">
      <ExpenseItem entry={props.arr[0]} />
      <ExpenseItem entry={props.arr[1]} />
      <ExpenseItem entry={props.arr[2]} />
      <ExpenseItem entry={props.arr[3]} />
    </div>
  );
};

export default ExpensesList;
