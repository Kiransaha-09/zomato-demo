import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

import "./ProductRating.css";

function ProductRating({ handleClick, selectedRating }) {
  const star = Array(5).fill(0);

  return (
    <div className="product-stars">
      {star.map((_, index) => {
        return (
          <FaStar
            key={index}
            onClick={() => handleClick(index)}
            className={selectedRating > index ? "eachstar" : ""}
          />
        );
      })}
    </div>
  );
}

export default ProductRating;
