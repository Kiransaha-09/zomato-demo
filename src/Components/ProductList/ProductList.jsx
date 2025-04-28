import React, { useState, useEffect } from "react";

import { Pagination } from "../Pagination/Pagination";

import ProductCards from "../ProductCards/ProductCards";
import SearchProduct from "../SearchProduct/SearchProduct";
import Loader from "../Loader/Loader";
import CartWidjet from "../CartWidjet/CartWidjet";
import BackNavigation from "../BackNavigation/BackNavigation";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { useSelector, useDispatch } from "react-redux";
import { getProductsList } from "../../redux/features/productDetails.slice";
import {
  addItemToCart,
  removeItemFromCart,
} from "../../redux/features/cart.slice";

export default function ProductList() {
  const [isLoading, setIsLoading] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchText, setSearchText] = useState("");
  const [currentSkip, setCurrentSkip] = useState(0);
  const [totalSearchItem, settotalSearchItem] = useState(0);
  const [searchResult, setSearchResult] = useState([]);

  //Render item list in the UI using Redux
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.product);
  const totalItems = useSelector((state) => state.product.totalItems);
  const cartItems = useSelector((state) => state.cart.addProduct);

  // Handles page change on click on page button
  const handlePageChange = (pageNumber) => {
    const skip = (pageNumber - 1) * itemsPerPage;
    setCurrentSkip(skip);

    if (searchText.length > 0) {
      searchProduct(skip);
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

  // Render search item list in UI
  const searchProduct = (skip = 0) => {
    setIsLoading(true);
    fetch(
      `https://dummyjson.com/products/search?q=${searchText}&value=${itemsPerPage}&skip=${skip}`
    )
      .then((response) => response.json())
      .then((data) => {
        setSearchResult(data?.products);
        setIsLoading(false);
        settotalSearchItem(data?.total);
      });
  };

  // Handle pagination dropdwon change
  const handleItemsPerPageChange = (e) => {
    setCurrentSkip(0);
    setItemsPerPage(e.target.value);
    if (searchText.length > 0) {
      searchProduct(0);
    } else {
      dispatch(getProductsList(e.target.value, 0));
    }
  };

  // Handle product search in productlist page
  const handleSearch = (e) => {
    setSearchText(e.target.value);
    if (e.target.value.length > 0) {
      searchProduct(0);
    }
  };
  return (
    <>
      <div className="cardheader">
        <BackNavigation />
        <h1 className="header">Desserts</h1>
        <ShoppingCart  cartItems={cartItems}/>
        <SearchProduct handleSearch={handleSearch} searchText={searchText} />
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="cart-layout">
          <div className="main-layout">
            <ProductCards
              productList={searchText.length > 0 ? searchResult : productList}
              cartItems={cartItems}
              handleAddToCart={handleAddToCart}
              totalItems={searchText.length > 0 ? totalSearchItem : totalItems}
            />
            <Pagination
              totalItems={searchText.length > 0 ? totalSearchItem : totalItems}
              itemsPerPage={itemsPerPage}
              onItemsPerPageChange={handleItemsPerPageChange}
              onPageChange={handlePageChange}
            />
          </div>
          <CartWidjet
            cartItems={cartItems}
            handleDeteleFromCart={handleDeteleFromCart}
          />
        </div>
      )}
    </>
  );
}
