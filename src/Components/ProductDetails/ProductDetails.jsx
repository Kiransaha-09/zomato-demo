import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getProductById } from "../../redux/features/productDetails.slice";
import { useDispatch, useSelector } from "react-redux";
import AddProduct from "../AddProduct/AddProduct";
import ProductReviews from "../ProductReviews/ProductReviews";

import vehicleLogo from "../../Assets/Frame (1).svg";
import cartLogo from "../../Assets/Frame (2).svg";

import "./ProductDetails.css";

import {
  addItemToCart,
  removeItemFromCart,
} from "../../redux/features/cart.slice";

export default function ProductDetails() {
  const params = useParams();

  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.product);
  const productImages = product.images || [];

  const [selectedImage, setSelectedImage] = useState(null);
  const cartItems = useSelector((state) => state.cart.addProduct);

  // Handles items added to cart
  const handleAddToCart = (item) => {
    dispatch(addItemToCart(item));
  };

  // Handle delete item from cart
  const handleDeteleFromCart = (itemId) => {
    dispatch(removeItemFromCart(itemId));
  };

  useEffect(() => {
    dispatch(getProductById(params.id));
  }, [params.id, dispatch]);

  useEffect(() => {
    if (productImages.length > 0) {
      setSelectedImage(productImages[0]);
    } else if (product.thumbnail) {
      setSelectedImage(product.thumbnail);
    }
  }, [productImages, product.thumbnail]);

  const shownProductImage = productImages?.map((image, index) => {
    return (
      <div
        key={index}
        className={`image-container ${
          selectedImage === image ? "selected-thumbnail" : ""
        }`}
        onClick={() => setSelectedImage(image)}
      >
        <img src={image} alt="Images" className="product-images" />
      </div>
    );
  });

  return (
    // Render card details in UI
    <>
      <div className="Product-details">
        <div className="product-thumbnail">
          <div className="main-image">
            <img src={selectedImage} alt="image" class="image"></img>
          </div>
          <div class="image-list">{shownProductImage}</div>
        </div>
        <div className="Each-Product">
          <div class="eachproduct-info">
            <p className="product-title">{product.title}</p>
            <p className="product-brand">{product.brand}</p>
          </div>
          <div className="eachproduct-price">
            <p>₹{product.price}</p>
          </div>
          <div className="eachproduct-btn">
            <AddProduct
              handleAddToCart={handleAddToCart}
              handleDeteleFromCart={handleDeteleFromCart}
              product={product}
              cartItems={cartItems}
            />
          </div>
          <div className="productdelivery-info">
            <div className="delivery-vehicle">
              <div>
                <img src={vehicleLogo} alt="VehicleLogo" />
              </div>
              <div>
                <p className="deliveryInfo">Free Delivery</p>
                <p className="deliveryDetails">
                  Enter your Postal code for Delivery Availability
                </p>
              </div>
            </div>
            <div className="delivery-cart">
              <div>
                <img src={cartLogo} alt="cartLogo" />
              </div>
              <div>
                <p className="deliveryInfo">Return Delivery</p>
                <p className="deliveryDetails"> {product.returnPolicy}</p>
              </div>
            </div>
          </div>
          {/* <div>
            <ProductReviews reviews={product.reviews} />
          </div> */}
        </div>
      </div>
    </>
  );
}
