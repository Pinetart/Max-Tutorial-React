import { useRef, useState } from "react";

const SimpleInput = (props) => {
  // const nameInputRef = useRef();

  const [enteredName, setEnteredName] = useState("");

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const formSubmissionHandler = (e) => {
    e.preventDefault();
    console.log(enteredName);
    // console.log(nameInputRef.current.value);

    // nameInputRef.current.value = "";
    setEnteredName("");
  };
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          // ref={nameInputRef}
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
