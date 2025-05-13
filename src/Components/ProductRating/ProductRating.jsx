import React from "react";
import { FaStar } from "react-icons/fa";

import "./ProductRating.css"

function ProductRating() {
  const star = Array(5).fill(0);
  return (
    <div className="product-stars">
      {star.map((_, index) => {
        return <FaStar key={index} className="eachstar"/>;
      })}
    </div>
  );
}

export default ProductRating;
