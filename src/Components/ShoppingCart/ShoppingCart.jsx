import React from "react";
import { useNavigate } from "react-router-dom";

import "./ShoppingCart.css";

function ShoppingCart(props) {
  const navigate = useNavigate();
  return (
    <div className="new-cardpage" onClick={() => navigate("/carts")}>
      <img
        src="/icons/shopping-bag.svg"
        alt="shopping bag"
        className="shopping_img"
      />
      <span class="badge">{props.cartItems}</span>
    </div>
  );
}

export default ShoppingCart;
