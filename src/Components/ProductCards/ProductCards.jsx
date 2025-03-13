import React from "react";

import ProductCardItem from "../ProductCardItem/ProductCardItem";

export default function ProductCards(props) {
  return (
    <div className="grid-container">
      {props.products.map((card) => {
        const cartText = props.cartItems.some((item) => item.id === card.id);
        return (
          <div>
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
