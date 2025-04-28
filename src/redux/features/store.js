import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/productDetails.slice";
import cartSlice from "../features/cart.slice";


const store = configureStore({
        reducer:{
            product:productSlice,
            cart: cartSlice
        },
    });

 export default store;   