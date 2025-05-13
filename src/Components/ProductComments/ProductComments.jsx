import React, { useState, useEffect } from "react";

import "./ProductComments.css";
import ProductRating from "../ProductRating/ProductRating";

function ProductComments() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleInputChange = (event) => {
    setNewComment(event.target.value);
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
          <ProductRating/>
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
          <div>
            <p className="comment-box">{comments}</p>
          </div>
        </>
      )}
    </>
  );
}

export default ProductComments;
