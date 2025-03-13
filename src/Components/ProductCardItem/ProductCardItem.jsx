import React from "react";
import { Link } from "react-router-dom";

import AddProduct from "../AddProduct/AddProduct";
import { API_ROUTES } from "../../constants/apiRoutes.constants";

const ProductCardItem = (props) => {
  return (
    <div>
      <Link
        to={`/${API_ROUTES.PRODUCT_DETAILS}/${props.card.id}`}
        className="carditem"
      >
        <div key={props.card.id}>
          <div>
            <img src={props.card.thumbnail} alt="cake" className="Img" />
          </div>
          <div className="card-btn">
            <AddProduct
              cartText={props.cartText}
              handleAddToCart={props.handleAddToCart}
              card={props.card}
            />
          </div>
          <div className="card-content">
            <p>{props.card.title}</p>
            <p>{props.card.description}</p>
            <p>{props.card.price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCardItem;
