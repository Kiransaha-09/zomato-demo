import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CardList from "./Components/CardList/CardList";
import Home from "./Components/HomePage/HomePage";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import { API_ROUTES } from "./Components/apiRoutes.constants";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`/${API_ROUTES.PRODUCTS}`} element={<CardList />} />
        <Route path={`/${API_ROUTES.PRODUCT_DETAILS}/:id`} element={<ProductDetails/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
