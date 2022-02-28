import ExpenseDate from "./ExpenseDate";
import ExpenseAmount from "./ExpenseAmount";
import ExpenseTitle from "./ExpenseTitle";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const clickHandler = () => {
    console.log("CLicked");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <ExpenseTitle title={props.title} />
        <ExpenseAmount amount={props.amount} />
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
