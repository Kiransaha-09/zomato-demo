import React, { useEffect, useContext } from "react";

import { Pagination } from "../Pagination/Pagination";

import ProductCards from "../ProductCards/ProductCards";
import SearchProduct from "../SearchProduct/SearchProduct";
import Loader from "../Loader/Loader";
import CartWidjet from "../CartWidjet/CartWidjet";
import BackNavigation from "../BackNavigation/BackNavigation";
import { ProductContext } from "../../Context/ProductContext";

export default function ProductList(props) {
  const {
    products,
    cartItems,
    setCartItem,
    isLoading,
    totalItems,
    setItemsPerPage,
    itemsPerPage,
    searchText,
    setSearchText,
    searchProduct,
    fetchCards,
  } = useContext(ProductContext);

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

  useEffect(() => {
    fetchCards();
  }, [itemsPerPage]);

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
        <BackNavigation />
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
