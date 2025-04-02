import { useNavigate } from "react-router-dom";
export default function SearchProduct(props) {
  const navigate = useNavigate();
  return (
    <div>
      <button className="new-cardpage" onClick={() => navigate("/carts")}>
        Go to Cart
      </button>
      <input
        type="text"
        placeholder="Search..."
        className="search-cart"
        value={props.searchText}
        onChange={(e) => props.handleSearch(e)}
      />
    </div>
  );
}
