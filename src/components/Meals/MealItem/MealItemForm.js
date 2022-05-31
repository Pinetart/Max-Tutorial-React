import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import { useState, useRef } from "react";

const MealItemForm = ({ id, onAddToCart }) => {
  const [amountIsValid, setAmountisValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountisValid(false);
      return;
    } else {
      setAmountisValid(true);
    }

    onAddToCart(enteredAmountNumber);
  };
  return (
    <form action="submit" onSubmit={submitHandler} className={classes["form"]}>
      <Input
        label="Amount"
        ref={amountInputRef}
        input={{
          id: "amount_" + { id },
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
