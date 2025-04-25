import React from "react";

import ProductCardItem from "../ProductCardItem/ProductCardItem";

export default function ProductCards(props) {
  // used to set initial value of productList before the list render in UI

  const productList = Array.isArray(props.productList) ? props.productList : [];
  return (
    <div className="grid-container">
      {productList.map((card) => {
        const cartText = props.cartItems.some((item) => item.id === card.id);
        return (
          <div key={card.id}>
            <ProductCardItem
              card={card}
              cartText={cartText}
              handleAddToCart={props.handleAddToCart}
            />
          </div>
        );
      })}
    </div>
  );
}
