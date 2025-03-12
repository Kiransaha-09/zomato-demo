import { useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { API_ROUTES } from "../apiRoutes.constants";
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
    navigate(-1);
  };
  return (
    // Render card details in UI 
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
          <h1>{productDeatils.title}</h1>
          <h2>{productDeatils.brand}</h2>
          <p>${productDeatils.price}</p>
          <p>Review:{productDeatils.rating}</p>
        </div>
      </div>
    </>
  );
}
