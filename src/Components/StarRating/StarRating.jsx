import React from "react";
import { FaStar } from "react-icons/fa";
export default function StarRating({ rating }) {
  const filledStars = Math.floor(rating);
  const emptyStars = 5 - filledStars;
  return (
    <div className="star-rating">
      <span> Rating: </span>
      {Array(filledStars)
        .fill()
        .map((_, index) => (
          <FaStar key={index} className="star filled" />
        ))}

      {Array(emptyStars)
        .fill()
        .map((_, index) => (
          <FaStar key={index} className="star empty" />
        ))}
    </div>
  );
}
