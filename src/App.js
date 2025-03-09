import "./App.css";
import React, { useState } from "react";
import CardList from "./Components/CardList/CardList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/HomePage/HomePage";
import ProductDetails from "./Components/ProductDetails/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cards" element={<CardList />} />
        <Route path="/product-details/:id" element={<ProductDetails/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
