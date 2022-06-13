import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  todoText: string;
  removeTodo: () => void;
}> = ({ todoText, removeTodo }) => {
  return (
    <li className={classes["item"]} onClick={removeTodo}>
      {todoText}
    </li>
  );
};
export default TodoItem;
