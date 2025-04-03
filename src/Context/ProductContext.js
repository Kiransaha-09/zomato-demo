import { createContext, useState, useEffect } from "react";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItem] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalItems, setTotalItems] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchText, setSearchText] = useState("");
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
  return (
    <ProductContext.Provider
      value={{
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
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
