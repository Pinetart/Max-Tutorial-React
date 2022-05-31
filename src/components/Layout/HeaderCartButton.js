import { useContext } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { CartContext } from "../../context/CartProvider";

const HeaderCartButton = ({ onClick }) => {
  const { items } = useContext(CartContext);
  const numberOfCartItems = items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);
  return (
    <button className={classes["button"]} onClick={onClick}>
      <span className={classes["icon"]}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes["badge"]}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
