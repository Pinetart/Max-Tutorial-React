import { FormEvent, useRef, useContext } from "react";
import { TodosContext } from "../context/todosContext";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const { addTodo: onAddTodo } = useContext(TodosContext);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }
    onAddTodo(enteredText);
  };
  return (
    <form onSubmit={submitHandler} className={classes["form"]}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};
export default NewTodo;
