import React from "react";
import StarRating from "../StarRating/StarRating";

const Review = ({ review}) => {
  return (
    <div key={review.id} className="review-card">
      <div className="product-avatar">
        {review.imageUrl ? (
          <img src={review.imageUrl} alt={review.reviewerName} />
        ) : (
          <div className="initial-placeholder">
            {review.reviewerName[0].toUpperCase()}
          </div>
        )}
      </div>
      <div>
        <p class="product-reviewer">{review.reviewerName}</p>
        <p class="product-star">
          <StarRating rating={review.rating} />
        </p>
        <p className="product-comment">{review.comment}</p>
      </div>
    </div>
  );
};

export default Review;
