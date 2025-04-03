import React from "react";

export default function CartButton() {
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
  return <h1>Hello cart</h1>;
}
