import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
    // can have only 1 reducer function that is for this whole store
    reducer: {
        cart: cartReducer
    }
});

export default appStore;