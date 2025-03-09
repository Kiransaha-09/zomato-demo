import { useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
export default function ProductDetails() {
  const params = useParams();
  const [productDeatils, setProductDetails] = useState({});
  const [showReturnPolicy, setShowReturnPolicy] = useState(false);
  const getProductById = () => {
    fetch(`https://dummyjson.com/products/${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        setProductDetails(data);
      });
  };
  useEffect(() => {
    getProductById();
  }, [params.id]);

  const handleReturnPolicy = () => {
    setShowReturnPolicy(true);
  };
  const navigate = useNavigate();
  const backButton = () => {
    navigate("/cards");
  };
  return (
    <>
      <button className="back-button" onClick={backButton}>
        Back
      </button>
      <div className="Product-details">
        <div>
          <img src={productDeatils.thumbnail} alt="image"></img>
          <div class="additional-details">
            <p>Additional Details: </p>
            <button
              onClick={() => {
                handleReturnPolicy();
              }}
            >
              {showReturnPolicy ? productDeatils.returnPolicy : "ReturnPolicy"}
            </button>
          </div>
        </div>
        <div className="Each-Product">
          <h1>Title: {productDeatils.title}</h1>
          <h2>Brand: {productDeatils.brand}</h2>
          <p>Price: {productDeatils.price}</p>
          <p>Rating: {productDeatils.rating}</p>
        </div>
      </div>
    </>
  );
}
