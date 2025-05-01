export default function SearchProduct(props) {

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        className="search-cart"
        value={props.searchText}
        onChange={(e) =>props.handleSearch(e)}
      />
    </div>
  );
}
