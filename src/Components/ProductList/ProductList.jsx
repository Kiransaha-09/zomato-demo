import React, { useState, useEffect } from "react";

import { Pagination } from "../Pagination/Pagination";

import ProductCards from "../ProductCards/ProductCards";
import Loader from "../Loader/Loader";
import { useSelector, useDispatch } from "react-redux";
import { getProductsList } from "../../redux/features/productDetails.slice";
import {
  addItemToCart,
  removeItemFromCart,
} from "../../redux/features/cart.slice";
import { fetchSearchProduct } from "../../services/productSearchaApi";

import "./ProductList.css"

export default function ProductList() {
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentSkip, setCurrentSkip] = useState(0);

  //Render item list in the UI using Redux
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.product);
  const totalItems = useSelector((state) => state.product.totalItems);
  const cartItems = useSelector((state) => state.cart.addProduct);
  const { searchResults, isLoading, totalSearchItems } = useSelector(
    (state) => state.search
  );
  const searchText = useSelector((state) => state.search.searchText);

  // Handles page change on click on page button
  const handlePageChange = (pageNumber) => {
    const skip = (pageNumber - 1) * itemsPerPage;
    setCurrentSkip(skip);

    if (searchText.length > 0) {
      dispatch(fetchSearchProduct({ searchText, itemsPerPage, skip }));
    } else {
      dispatch(getProductsList({ itemsPerPage, skip }));
    }
  };

  // Handles items added to cart
  const handleAddToCart = (item) => {
    dispatch(addItemToCart(item));
  };

  // Handle delete item from cart
  const handleDeteleFromCart = (itemId) => {
    dispatch(removeItemFromCart(itemId));
  };

  useEffect(() => {
    if (searchText.length == 0) {
      dispatch(getProductsList({ itemsPerPage, skip: currentSkip }));
      setCurrentSkip(0);
    }
  }, [currentSkip, itemsPerPage, searchText, dispatch]);

  // Handle pagination dropdwon change
  const handleItemsPerPageChange = (e) => {
    const newItemsPerPage = e.target.value;
    setItemsPerPage(newItemsPerPage);
    setCurrentSkip(0);
    if (searchText.length > 0) {
      dispatch(
        fetchSearchProduct({
          searchText,
          itemsPerPage: newItemsPerPage,
          skip: 0,
        })
      );
    } else {
      dispatch(getProductsList({ itemsPerPage: newItemsPerPage, skip: 0 }));
    }
  };

  // Effect hook to fetch products initially or based on search
  useEffect(() => {
    if (searchText.length === 0) {
      dispatch(getProductsList({ itemsPerPage, skip: currentSkip }));
    }
  }, [dispatch, searchText, itemsPerPage, currentSkip]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="cart-layout">
          <div className="main-layout">
            <ProductCards
              productList={searchText.length > 0 ? searchResults : productList}
              cartItems={cartItems}
              handleAddToCart={handleAddToCart}
              totalItems={searchText.length > 0 ? totalSearchItems : totalItems}
              handleDeteleFromCart={handleDeteleFromCart}
            />
            <Pagination
              totalItems={searchText.length > 0 ? totalSearchItems : totalItems}
              itemsPerPage={itemsPerPage}
              onItemsPerPageChange={handleItemsPerPageChange}
              onPageChange={handlePageChange}
              searchText={searchText}
            />
          </div>
        </div>
      )}
    </>
  );
}
