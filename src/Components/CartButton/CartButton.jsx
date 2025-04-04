import React,{useContext} from "react";
import { ProductContext } from "../../Context/ProductContext";
import CartWidjet from "../CartWidjet/CartWidjet";

export default function CartButton() {
  const {
    cartItems,
    setCartItem 
  } = useContext(ProductContext);
  return(
     <CartWidjet cartItems={cartItems} setCartItem={setCartItem} />
  )
}
