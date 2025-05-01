import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProductList from "./Components/ProductList/ProductList";
import Home from "./Components/HomePage/HomePage";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import CartPage from "./Components/CartPage/CartPage";
import { API_ROUTES } from "./constants/apiRoutes.constants";
import Header from "./Components/Header/Header";


import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`/${API_ROUTES.PRODUCTS}`} element={<ProductList />} />
        <Route
          path={`/${API_ROUTES.PRODUCT_DETAILS}/:id`}
          element={<ProductDetails />}
        />
        <Route path={`/${API_ROUTES.CART_PAGE}`} element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
