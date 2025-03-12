export default function AddProduct(props) {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        props.handleAddToCart(props.card);
      }}
    >
      {props.cartText ? "Added to Cart" : "Add to Cart"}
    </button>
  );
}
