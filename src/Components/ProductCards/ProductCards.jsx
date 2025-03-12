import React from "react";
import { Link } from "react-router-dom";
import { API_ROUTES } from "../apiRoutes.constants";
import AddProduct from "../AddProduct/AddProduct";

export default function ProductCards(props) {
  return (
    <div className="grid-container">
      {props.cards.map((card) => {
        const cartText = props.cartItem.some((item) => item.id === card.id);
        return (
          <div>
            <Link
              to={`/${API_ROUTES.PRODUCT_DETAILS}/${card.id}`}
              className="carditem"
            >
              <div key={card.id}>
                <div>
                  <img
                    src={card.thumbnail}
                    alt="cake"
                    style={{ height: 300, width: 250 }}
                  />
                </div>
                <div className="card-btn">
                  <AddProduct
                    cartText={cartText}
                    handleAddToCart={props.handleAddToCart}
                    card={card}
                  />
                </div>
                <div className="card-content">
                  <p>{card.title}</p>
                  <p>{card.description}</p>
                  <p>{card.price}</p>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
