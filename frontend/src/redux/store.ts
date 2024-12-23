import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice"
export default configureStore({
    reducer:{
        //add reducer here
        products:productReducer,
    },
})