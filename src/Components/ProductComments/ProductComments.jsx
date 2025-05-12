import React, { useState, useEffect } from "react";

import "./ProductComments.css";

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
          <div className="comment-main">
            <textarea
              placeholder="Add Reviews here..."
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
            <p className="comment-box">{comments.join(", ")}</p>
          </div>
        </>
      )}
    </>
  );
}

export default ProductComments;
