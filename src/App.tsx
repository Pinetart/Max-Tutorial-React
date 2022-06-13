import { useState } from "react";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";

function App() {
  useState();
  const todos = [new Todo("Learn React"), new Todo("Learn Typescript")];
  const addTodoHandler = (text: string) => {
    setTodos(text);
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
