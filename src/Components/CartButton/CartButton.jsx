import React from "react";
import CartWidjet from "../CartWidjet/CartWidjet";

export default function CartButton(props) {
  return(
     <CartWidjet cartItems={props.cartItems} setCartItem={props.setCartItem} handleDelete={props.handleDelete}/>
  );
}
