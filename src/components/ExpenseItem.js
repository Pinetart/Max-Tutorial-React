import ExpenseDate from "./ExpenseDate";
import ExpenseAmount from "./ExpenseAmount";
import ExpenseTitle from "./ExpenseTitle";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <ExpenseTitle title={props.title} />
        <ExpenseAmount amount={props.amount} />
      </div>
    </div>
  );
}

export default ExpenseItem;
