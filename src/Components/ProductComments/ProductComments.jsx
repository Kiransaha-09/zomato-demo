import React, { useState } from "react";

import "./ProductComments.css";
import ProductRating from "../ProductRating/ProductRating";
import Review from "../ProductReviews/Review";

function ProductComments() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [selectedRating, setSelectedRating] = useState(null);
  const reviewDetails = {
    comment: comments,
    date: new Date().getDate(),
    rating: selectedRating,
    reviewerName: "Kiran Saha",
  };

  const handleInputChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleClick = (index) => {
    setSelectedRating(index + 1);
  };

  const handleCommentSubmit = () => {
    if (newComment !== "") {
      setComments((prevComments) => [...prevComments, newComment]);
      setNewComment("");
    }
  };
  return (
    <>
      {comments.length === 0 ? (
        <>
          <h2 className="comment-header">Write a Review:</h2>
          <p className="product-rate">What is it like to Product?</p>
          <ProductRating
            handleClick={handleClick}
            selectedRating={selectedRating}
          />
          <div className="comment-main">
            <p className="title">Review Title</p>
            <textarea
              className="comment-container"
              value={newComment}
              onChange={handleInputChange}
            />
            <button onClick={handleCommentSubmit}>Submit Review</button>
          </div>
        </>
      ) : (
        <>
          <div className="reviews">
            <Review review={reviewDetails} />
          </div>
        </>
      )}
    </>
  );
}

export default ProductComments;
