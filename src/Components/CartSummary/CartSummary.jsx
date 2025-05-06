import React from "react";

import "./CartSummary.css";

function CartSummary({ cartItems }) {
  const calculateSubtotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * 1, 0)
      .toFixed(3);
  };
  const subtotal = calculateSubtotal();
  const shipping = parseFloat(subtotal) + (cartItems.length > 0 ? 99.00 : 0.00);
  return (
    <div class="checkout-container">
      <div>
        <p className="checkout-heading">Cart Summary</p>
        <div className="checkout-prices">
          <p>Subtotal </p>
          <p className="price">₹ {subtotal}</p>
        </div>
        <div className="checkout-prices">
          <p>Shipping </p>
          <p className="price">₹ {cartItems.length > 0 ? 99.00 : 0.00}</p>
        </div>
      </div>
      <div className="checkout-info">
        <div className="checkout-prices">
          <p className="price">Total </p>
          <p className="price">₹{shipping}</p>
        </div>
        <div className="checkout-btn">
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default CartSummary;
