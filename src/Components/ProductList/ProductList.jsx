import React, { useState, useEffect } from "react";

import { Pagination } from "../Pagination/Pagination";
// import { useNavigate } from "react-router-dom";

import ProductCards from "../ProductCards/ProductCards";
import SearchProduct from "../SearchProduct/SearchProduct";
import Loader from "../Loader/Loader";
import CartWidjet from "../CartWidjet/CartWidjet";
import BackNavigation from "../BackNavigation/BackNavigation";

export default function ProductList(props) {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItem] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalItems, setTotalItems] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchText, setSearchText] = useState("");

  // Handles page change on click on page button
  const handlePageChange = (pageNumber) => {
    const skip = (pageNumber - 1) * itemsPerPage;
    fetchCards(skip);
    searchProduct(skip);
  };

  // Handles items added to cart
  const handleAddToCart = (item) => {
    setCartItem((prev) => [...prev, item]);
  };

  //Render item list in the UI
  const fetchCards = (skip = 0) => {
    setIsLoading(true);
    fetch(`https://dummyjson.com/products?limit=${itemsPerPage}&skip=${skip}`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data?.products);
        setIsLoading(false);
        setTotalItems(data?.total);
      });
  };
  useEffect(() => {
    fetchCards();
  }, [itemsPerPage]);

  // Render search item list in UI
  const searchProduct = (skip = 0) => {
    setIsLoading(true);
    fetch(
      `https://dummyjson.com/products/search?q=${searchText}&value=${itemsPerPage}&skip=${skip}`
    )
      .then((response) => response.json())
      .then((data) => {
        setProducts(data?.products);
        setIsLoading(false);
        setTotalItems(data?.total);
      });
  };
  useEffect(() => {
    if (searchText.length > 0) {
      searchProduct();
    } else {
      fetchCards();
    }
  }, [searchText]);

  // Handle pagination dropdwon change
  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(e.target.value);
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <>
      <div className="cardheader">
        <BackNavigation/>
        <h1 className="header">Desserts</h1>
        <SearchProduct handleSearch={handleSearch} searchText={searchText} />
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="cart-layout">
          <div className="main-layout">
            <ProductCards
              products={products}
              cartItems={cartItems}
              handleAddToCart={handleAddToCart}
            />
            <Pagination
              totalItems={totalItems}
              itemsPerPage={itemsPerPage}
              onItemsPerPageChange={handleItemsPerPageChange}
              onPageChange={handlePageChange}
            />
          </div>
          <CartWidjet cartItems={cartItems} setCartItem={setCartItem} />
        </div>
      )}
    </>
  );
}
