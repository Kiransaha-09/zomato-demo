import BackNavigation from "../BackNavigation/BackNavigation";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import SearchProduct from "../SearchProduct/SearchProduct";
import { setSearchText } from "../../redux/features/search.slice";

import "./Header.css";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getSearchProduct } from "../../redux/features/search.slice";

function Header() {
  const searchText = useSelector((state) => state.search.searchText);
  const itemsPerPage = 10;
  const location = useLocation();
  const noSearchShowRoutes = ["/"];
  const showSearchBox = !noSearchShowRoutes.includes(location.pathname);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSearch = (e) => {
    dispatch(setSearchText(e.target.value));
    if (e.target.value.length > 0) {
      dispatch(
        getSearchProduct({ searchText: e.target.value, itemsPerPage, skip: 0 })
      );
      navigate("/products");
    }
  };
  const productCount = useSelector((state) => state.cart.addProduct.length);
  return (
    <header>
      <div class="container">
        <nav>
          <ul class="nav-links">
            <li>
              <BackNavigation />
            </li>
            <li>
              <h1 className="header">Shopper Hub</h1>
            </li>
            <li>
              <ShoppingCart cartItems={productCount} />
            </li>
            <li>
              {showSearchBox && (
                <li>
                  <SearchProduct
                    handleSearch={handleSearch}
                    searchText={searchText}
                  />
                </li>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
