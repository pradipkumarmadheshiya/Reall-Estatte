import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./favoriteSlice";
import filterReducer from "./filterSlice"

const store=configureStore({
    reducer:{
        favorite:favoriteReducer,
        filter:filterReducer
    }
})

export default store