import React from "react";
import { useNavigate } from "react-router-dom";

function ShoppingCart(props) {
  const navigate = useNavigate();
  return (
    <div className="notification">
      <button className="new-cardpage" onClick={() => navigate("/carts")}>
        🛒
      </button>
      <span class="badge">{props.cartItems.length}</span>
    </div>
  );
}

export default ShoppingCart;
