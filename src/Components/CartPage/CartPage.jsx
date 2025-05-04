import React from "react";
import CartWidjet from "../CartWidjet/CartWidjet";
import { useSelector, useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/features/cart.slice";
import PromoCode from "../PromoCode/PromoCode";
import CartSummary from "../CartSummary/CartSummary";

import "./CartPage.css"

export default function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.addProduct);
  const handleDeteleFromCart = (itemId) => {
    dispatch(removeItemFromCart(itemId));
  };
  return (
    <>
      <div className="product-container">
        <CartWidjet
          cartItems={cartItems}
          handleDeteleFromCart={handleDeteleFromCart}
        />
        <div className="product-summary">
          <CartSummary cartItems={cartItems} />
          <PromoCode />
        </div>
      </div>
    </>
  );
}
