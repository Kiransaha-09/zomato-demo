import React from "react";
import { Link } from "react-router-dom";
import StarRating from "../StarRating/StarRating.jsx";

import AddProduct from "../AddProduct/AddProduct";
import { API_ROUTES } from "../../constants/apiRoutes.constants";

import "./ProductCardItem.css";

const ProductCardItem = (props) => {
  
  return (
    <div>
      <Link
        to={`/${API_ROUTES.PRODUCT_DETAILS}/${props.product.id}`}
        className="carditem"
      >
        <div key={props.product.id} className="card-container">
          <div className="product-image">
            <img src={props.product.thumbnail} alt="cake" className="Img" />
          </div>
          <div className="product-content">
            <div className="product-context">
              <p className="product-name">{props.product.title}</p>
              <p className="product-price">₹{props.product.price}</p>
            </div>
            <StarRating rating={props.product.rating} />
          </div>
          <div className="product-btn">
            <div className="card-btn">
              <AddProduct
                cartText={props.cartText}
                handleAddToCart={props.handleAddToCart}
                handleDeteleFromCart={props.handleDeteleFromCart}
                product={props.product}
                cartItems={props.cartItems}
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCardItem;
