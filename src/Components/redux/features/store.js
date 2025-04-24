import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productDetails.slice";

const store = configureStore({
        reducer:{
            product:productSlice
        },
    });

 export default store;   