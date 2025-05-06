import "./CartWidjet.css";
import VehicleImg from "../../Assets/Vector.svg";

export default function CartWidjet(props) {
  return (
    <div className="cart">
      <h1>Your cart </h1>
      {props.cartItems.length === 0 && (
        <>
          <img
            src="https://static.vecteezy.com/system/resources/previews/001/504/962/non_2x/shopping-cart-icon-free-vector.jpg"
            alt="item's added to cart"
            style={{ height: 150, width: 180 }}
          />
          <p>Your added items will apper here</p>
        </>
      )}
      {props.cartItems.map((card, index) => (
        <div key={index} className="cart-details">
          <div className="cart-content">
            <img src={card.thumbnail} alt="image" />
            <div className="product-info">
              <p>{card.title}</p>
              <p>₹ {card.price}</p>
            </div>
          </div>
          <button onClick={() => props.handleDeteleFromCart(card.id)}>
            Remove
          </button>
        </div>
      ))}
      {props.cartItems.length > 0 && (
        <div className="delivery-info">
          <img src={VehicleImg} alt="car" />
          <p>
            Estimated delivery by <span>May 25</span>
          </p>
        </div>
      )}
    </div>
  );
}
