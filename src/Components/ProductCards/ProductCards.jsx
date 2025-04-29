import React from "react";

import ProductCardItem from "../ProductCardItem/ProductCardItem";

export default function ProductCards(props) {
  // used to set initial value of productList before the list render in UI

  const productList = Array.isArray(props.productList) ? props.productList : [];
  return (
    <div className="grid-container">
      {productList.map((product) => {
        const cartText = props.cartItems.some((item) => item.id === product.id);
        return (
          <div key={product.id}>
            <ProductCardItem
              product={product}
              cartText={cartText}
              handleAddToCart={props.handleAddToCart}
              handleDeteleFromCart={props.handleDeteleFromCart}
              cartItems={props.cartItems}
            />
          </div>
        );
      })}
    </div>
  );
}
