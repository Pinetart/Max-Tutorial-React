import React, { useContext } from "react";
import { ProductsContext } from "../context/productsContext";

import FavoriteItem from "../components/Favorites/FavoriteItem";
import "./Products.css";

const Favorites = (props) => {
  const productList = useContext(ProductsContext).productList.filter(
    (p) => p.isFavorite
  );

  let content = <p className="placeholder">Got no favorites yet!</p>;
  if (productList.length > 0) {
    content = (
      <ul className="products-list">
        {productList.map((prod) => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    );
  }
  return content;
};

export default Favorites;
