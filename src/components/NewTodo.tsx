import { FormEvent, useRef } from "react";

const NewTodo: React.FC<{}> = () => {
  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={} />
      <button>Add Todo</button>
    </form>
  );
};
export default NewTodo;
