import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProductList from "./Components/ProductList/ProductList";
import Home from "./Components/HomePage/HomePage";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import CartButton from "./Components/CartButton/CartButton";
import { API_ROUTES } from "./constants/apiRoutes.constants";

import "./App.css";
import {ProductProvider} from "./Context/ProductContext";


function App() {
  return (
    <BrowserRouter>
      <ProductProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={`/${API_ROUTES.PRODUCTS}`} element={<ProductList />} />
          <Route
            path={`/${API_ROUTES.PRODUCT_DETAILS}/:id`}
            element={<ProductDetails />}
          />
          <Route path={`/${API_ROUTES.CART_PAGE}`} element={<CartButton />} />
        </Routes>
      </ProductProvider>
    </BrowserRouter>
  );
}
export default App;
