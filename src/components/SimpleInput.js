import { useState, useEffect } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  useEffect(() => {
    if (enteredNameIsValid) {
      console.log("Name input is valid");
    }
  }, [enteredNameIsValid]);

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const nameInputisInvalid = !enteredNameIsValid && enteredNameTouched;

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);
    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }
  };
  const formSubmissionHandler = (e) => {
    e.preventDefault();
    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      setEnteredNameTouched(true);
      return;
    }
    console.log(enteredName);

    setEnteredNameIsValid(true);
    setEnteredName("");
  };

  const nameInputClasses = nameInputisInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
          onBlur={nameInputBlurHandler}
        />
        {nameInputisInvalid && (
          <p className="error-text">Please Enter a Value</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
