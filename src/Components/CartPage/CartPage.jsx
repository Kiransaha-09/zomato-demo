import React from "react";
import CartWidjet from "../CartWidjet/CartWidjet";
import { useSelector, useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/features/cart.slice";
import BackNavigation from "../BackNavigation/BackNavigation";

export default function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.addProduct);
  const handleDeteleFromCart = (itemId) => {
    dispatch(removeItemFromCart(itemId));
  };
  return (
    <>
      <BackNavigation />
      <CartWidjet
        cartItems={cartItems}
        handleDeteleFromCart={handleDeteleFromCart}
      />
    </>
  );
}
