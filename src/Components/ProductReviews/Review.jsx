import React from "react";

const Review = ({ review, index }) => {
  return (
    <div key={index} className="review-card">
      <p>
        {index + 1}. Name: <strong>{review.reviewerName}</strong>
      </p>
      <p>
        Email:<strong>{review.reviewerEmail}</strong>
      </p>
      <p>Comment: {review.comment}</p>
      <p>Rating: {review.rating} ⭐</p>
    </div>
  );
};

export default Review;
