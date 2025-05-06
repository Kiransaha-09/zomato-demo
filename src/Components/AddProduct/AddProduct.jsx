import "./AddProduct.css"
export default function AddProduct({
  product,
  cartItems = [],
  handleDeteleFromCart,
  handleAddToCart,
}) {
  const isItemAddedToCart = cartItems.find(
    (cartItem) => cartItem.id === product.id
  );

  const handleCartAction = (event) => {
    event.preventDefault();
    if (isItemAddedToCart) {
      handleDeteleFromCart(product.id);
    } else {
      handleAddToCart(product);
    }
  };

  return (
    <button onClick={handleCartAction} class="add-btn">
      {isItemAddedToCart ? "Added to Cart" : "Add to Cart"}
    </button>
  );
}
