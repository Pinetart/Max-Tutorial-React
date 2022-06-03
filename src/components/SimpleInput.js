import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const formSubmissionHandler = (e) => {
    e.preventDefault();
    if (enteredName.trim() === "") {
      setErrorMessage("Please enter a value.");
      return;
    }
    console.log(enteredName);

    setEnteredName("");
    setErrorMessage("");
  };
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
        {errorMessage && <p>{errorMessage}</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
