import React, { useState, useEffect } from "react";
import YourCard from "../YourCart/YourCart";
import { Pagination } from "../Pagination/Pagination";
import { useNavigate } from "react-router-dom";
import ProductCards from "../ProductCards/ProductCards";
import SearchProduct from "../SearchProduct/SearchProduct";

export default function ProductList(props) {
  const [cards, setCards] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalProduct, setTotalProduct] = useState(0);
  const [pageArray, setPageArray] = useState([]);
  const [value, setValue] = useState(10);
  const [searchText, setSearchText] = useState("");
  const totalPages = Math.ceil(totalProduct / value);

  // Handles page change on click on page button
  const handleClick = (pageNumber) => {
    const skip = (pageNumber - 1) * value;
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
    fetch(`https://dummyjson.com/products?limit=${value}&skip=${skip}`)
      .then((response) => response.json())
      .then((data) => {
        setCards(data?.products);
        setIsLoading(false);
        setTotalProduct(data?.total);
      });
  };
  useEffect(() => {
    fetchCards();
  }, [value]);

  // Render search item list in UI
  const searchProduct = (skip = 0) => {
    setIsLoading(true);
    debugger;
    fetch(
      `https://dummyjson.com/products/search?q=${searchText}&value=${value}&skip=${skip}`
    )
      .then((response) => response.json())
      .then((data) => {
        setCards(data?.products);
        setIsLoading(false);
        setTotalProduct(data?.total);
      });
  };
  useEffect(() => {
    debugger;
    if (searchText.length > 0) {
      searchProduct();
    } else {
      fetchCards();
    }
  }, [searchText]);

  //Handles pagination
  const getNumberOfPages = () => {
    let pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    setPageArray(pages);
  };
  useEffect(() => {
    getNumberOfPages();
  }, [cards]);

  // Handle pagination dropdwon change
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSearch = (e) => {
    debugger;
    setSearchText(e.target.value);
  };
  //Handles navigation from cart screen to log-in page
  const navigate = useNavigate();
  const backNavigation = () => {
    navigate("/");
  };
  return (
    <>
      <div className="cardheader">
        <button onClick={backNavigation}>Back</button>
        <h1 className="header">Desserts</h1>
        <SearchProduct handleSearch={handleSearch} searchText={searchText} />
      </div>
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <div className="cart-layout">
          <div className="main-layout">
            <ProductCards
              cards={cards}
              cartItem={cartItem}
              handleAddToCart={handleAddToCart}
            />
            <Pagination
              pageArray={pageArray}
              value={value}
              handleChange={handleChange}
              handleClick={handleClick}
              cards={cards}
            />
          </div>
          <YourCard cartItem={cartItem} setCartItem={setCartItem} />
        </div>
      )}
    </>
  );
}
