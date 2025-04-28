import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
import BackNavigation from "../BackNavigation/BackNavigation";
import { getProductById } from "../../redux/features/productDetails.slice";
import { useDispatch, useSelector } from "react-redux";
import StarRating from "../StarRating/StarRating";
import ProductReviews from "../ProductReviews/ProductReviews";

export default function ProductDetails() {
  const params = useParams();

  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.product);

  useEffect(() => {
    dispatch(getProductById(params.id));
  }, [params.id, dispatch]);

  return (
    // Render card details in UI
    <>
      <BackNavigation />
      <div className="Product-details">
        <div>
          <img src={product.thumbnail} alt="image"></img>
        </div>
        <div className="Each-Product">
          <h1>{product.title}</h1>
          <h2>{product.brand}</h2>
          <p>${product.price}</p>
          <StarRating rating={product?.rating || 0} />
        </div>
        <ProductReviews reviews={product.reviews} />
        <div className="additional-details">
          <p>
            Additional Details:
            {product.returnPolicy}
          </p>
        </div>
      </div>
    </>
  );
}
