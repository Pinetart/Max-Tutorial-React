import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import classes from "./MealItem.module.css";
import { CartContext } from "../../../context/CartProvider";

const MealItem = ({ id, name, description, price }) => {
  const { addItem } = useContext(CartContext);
  const formatPrice = `$${price.toFixed(2)}`;
  const addToCartHandler = (amount) => {
    addItem({
      id: id,
      name: name,
      amount: amount,
      price: price,
    });
  };
  return (
    <li className={classes["meal"]}>
      <div>
        <h3>{name}</h3>
        <div className={classes["description"]}>{description}</div>
        <div className={classes["price"]}>{formatPrice}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
