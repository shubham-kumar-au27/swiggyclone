import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";


const appStore = configureStore({
    //combination of different small stores/slices-----
    reducer:{
        cart: cartReducer,
    }


});


export default appStore;
