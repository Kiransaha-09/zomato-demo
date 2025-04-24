import { useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import BackNavigation from "../BackNavigation/BackNavigation";
import { getProductById } from "../redux/features/productDetails.slice";
import { useDispatch, useSelector } from "react-redux";

export default function ProductDetails() {
  const params = useParams();
  const [showReturnPolicy, setShowReturnPolicy] = useState(false);

  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.product);

  useEffect(() => {
    dispatch(getProductById(params.id));
  }, [params.id, dispatch]);

  const handleReturnPolicy = () => {
    setShowReturnPolicy(true);
  };
  return (
    // Render card details in UI
    <>
      <BackNavigation />
      <div className="Product-details">
        <div>
          <img src={product.thumbnail} alt="image"></img>
          <div className="additional-details">
            <p>Additional Details: </p>
            <button
              onClick={() => {
                handleReturnPolicy();
              }}
            >
              {showReturnPolicy ? product.returnPolicy : "ReturnPolicy"}
            </button>
          </div>
        </div>
        <div className="Each-Product">
          <h1>{product.title}</h1>
          <h2>{product.brand}</h2>
          <p>${product.price}</p>
          <p>Review:{product.rating}</p>
        </div>
      </div>
    </>
  );
}
