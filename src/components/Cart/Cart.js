import { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { CartContext } from "../../context/CartProvider";

const Cart = ({ onClose }) => {
  const { items, totalAmount, addItem, removeItem } = useContext(CartContext);

  const cartItemRemoveHandler = (id) => {
    removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    addItem({ ...item, amount: 1 });
  };

  return (
    <Modal onClose={onClose}>
      <ul className={classes["cart-items"]}>
        {items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        ))}
      </ul>
      <div className={classes["total"]}>
        <span>Total Amount</span>
        <span>{`$${totalAmount.toFixed(2)}`}</span>
      </div>
      <div className={classes["actions"]}>
        <button className={classes["button--alt"]} onClick={onClose}>
          Close
        </button>
        {items.length > 0 && (
          <button className={classes["button"]}>Order</button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
