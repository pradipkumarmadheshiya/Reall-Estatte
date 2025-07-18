import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./favoriteSlice";
import filterReducer from "./filterSlice"
import selectedPropertyReducer from "./selectedPropertySlice";

const store=configureStore({
    reducer:{
        favorite:favoriteReducer,
        filter:filterReducer,
        selectedProperty:selectedPropertyReducer
    }
})

export default store