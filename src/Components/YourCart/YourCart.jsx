export default function YourCard(props) {
  // Handle delete item from cart
  const handleDetele = (index) => {
    props.setCartItem((a)=>a.filter((item,i) => i !== index))
     
  };
  return (
    <div className="cart">
      <h1>Your cart ({props.cartItem.length}) </h1>
      {props.cartItem.length === 0 && (
        <>
          <img
            src="https://static.vecteezy.com/system/resources/previews/001/504/962/non_2x/shopping-cart-icon-free-vector.jpg"
            alt="item's added to cart"
            style={{ height: 150, width: 180 }}
          />
          <p>Your added items will apper here</p>
        </>
      )}
      {props.cartItem.map((card, index) => (
        <div key={index} className="cart-details">
          <p>{index + 1}.</p>
          <p>{card.title}</p>
          <p>= {card.price}</p>
          <button onClick={() => handleDetele(index)}>🗑️ Detele</button>
        </div>
      ))}
    </div>
  );
}
