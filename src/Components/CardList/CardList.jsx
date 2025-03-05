import React, { useState, useEffect } from "react";
import YourCard from "../YourCart/YourCart";

export default function CardList(props) {
  const [cards, setCards] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalProduct, setTotalProduct] = useState(0);
  const [pageArray, setPageArray] = useState([]);
  const [value, setValue] = useState(10);
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
    fetch(
      `https://dummyjson.com/products/search?q=${props.searchText}&value=${value}&skip=${skip}`
    )
      .then((response) => response.json())
      .then((data) => {
        setCards(data?.products);
        setIsLoading(false);
        setTotalProduct(data?.total);
      });
  };
  useEffect(() => {
    if (props.searchText.length > 0) {
      searchProduct();
    } else {
      fetchCards();
    }
  }, [props.searchText]);


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

  return (
    <>
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <>
          <div className="main-layout">
            <div className="grid-container">
              {cards.map((card) => {
                const cartText = cartItem.some((item) => item.id === card.id);
                return (
                  <div key={card.id}>
                    <div>
                      <img
                        src={card.thumbnail}
                        alt="cake"
                        style={{ height: 300, width: 250 }}
                      />
                    </div>
                    <div className="card-btn">
                      <button onClick={() => handleAddToCart(card)}>
                        {cartText ? "Added to Cart" : "Add to Cart"}
                      </button>
                    </div>
                    <div className="card-content">
                      <p>{card.title}</p>
                      <p>{card.description}</p>
                      <p>{card.price}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="pages">
              {pageArray.map((item, index) => {
                return (
                  <div key={index}>
                    <button onClick={() => handleClick(item)}>{item}</button>
                  </div>
                );
              })}
              <div>
                <select value={value} onChange={(event) => handleChange(event)}>
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
              </div>
            </div>
          </div>
          <YourCard cartItem={cartItem} setCartItem={setCartItem} />
        </>
      )}
    </>
  );
}
