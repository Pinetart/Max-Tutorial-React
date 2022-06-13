import { useContext } from "react";
import { TodosContext } from "../context/todosContext";
import React from "react";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

const Todos: React.FC = () => {
  const { items, removeTodo } = useContext(TodosContext);
  return (
    <ul className={classes["todos"]}>
      {items.map((item) => (
        <TodoItem
          key={item.id}
          removeTodo={removeTodo.bind(null, item.id)}
          todoText={item.text}
        />
      ))}
    </ul>
  );
};
export default Todos;
