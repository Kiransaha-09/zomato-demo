export default function searchProduct(props) {
  return (
    <>
      <input
        type="text"
        placeholder=" Search..."
        className="search-cart"
        value={props.searchText}
        onChange={(e) => props.handleSearch(e)}
      ></input>
    </>
  );
}
