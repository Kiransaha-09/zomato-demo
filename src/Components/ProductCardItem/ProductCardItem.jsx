import React from "react";
import { Link } from "react-router-dom";

import AddProduct from "../AddProduct/AddProduct";
import { API_ROUTES } from "../../constants/apiRoutes.constants";

const ProductCardItem = (props) => {
  return (
    <div>
      <Link
        to={`/${API_ROUTES.PRODUCT_DETAILS}/${props.product.id}`}
        className="carditem"
      >
        <div key={props.product.id}>
          <div>
            <img src={props.product.thumbnail} alt="cake" className="Img" />
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
          <div className="product-content">
            <p>{props.product.title}</p>
            <p>{props.product.description}</p>
            <p>${props.product.price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCardItem;
