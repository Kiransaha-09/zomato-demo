import React from "react";

const Review = ({ review, index }) => {
  return (
    <div key={index} className="review-card">
      <div>
      <p>
        {index + 1}. Name: <strong>{review.reviewerName}</strong>
      </p>
      </div>
      <div>
      <p>Rating: {review.rating} ⭐</p>
      </div>
      {/* <p>
        Email:<strong>{review.reviewerEmail}</strong>
      </p> */}
      <p>Comment: {review.comment}</p>
    </div>
  );
};

export default Review;
