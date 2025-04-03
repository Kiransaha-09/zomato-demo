import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import ProductList from "./Components/ProductList/ProductList";
import Home from "./Components/HomePage/HomePage";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import CartButton from "./Components/CartButton/CartButton";
import { API_ROUTES } from "./constants/apiRoutes.constants";

import "./App.css";

function App() {
  const [cartItems, setCartItem] = useState([]);
  const handleDelete = (id) => {
    setCartItem((a) => a.filter((cards)=>cards.id !==id));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path={`/${API_ROUTES.PRODUCTS}`}
          element={
            <ProductList
              cartItems={cartItems}
              setCartItem={setCartItem}
              handleDelete={handleDelete}
            />
          }
        />
        <Route
          path={`/${API_ROUTES.PRODUCT_DETAILS}/:id`}
          element={<ProductDetails />}
        />
        <Route
          path={`/${API_ROUTES.CART_PAGE}`}
          element={
            <CartButton
              cartItems={cartItems}
              setCartItem={setCartItem}
              handleDelete={handleDelete}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
