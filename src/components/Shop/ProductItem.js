import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

import { useDispatch } from "react-redux";
import { cartActions } from "../../store/slices/cart-slice";

const ProductItem = ({ id, title, price, description }) => {
  // const { title, price, description } = props;
  // const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        title,
        id,
        price,
      })
    );
    // console.log(items);
  };
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
