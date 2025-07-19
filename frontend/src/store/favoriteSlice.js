import {createSlice} from "@reduxjs/toolkit"

const initialState={
    favorites:JSON.parse(localStorage.getItem("localStorageFavorites")) || []
}

const favoriteSlice=createSlice({
    name:"favorite",
    initialState,
    reducers:{
        toggleFavorite:(state, action)=>{
            const propertyId=action.payload
            if(state.favorites.includes(propertyId)){
                state.favorites=state.favorites.filter((id)=>id!==propertyId)
            }
            else{
                state.favorites.push(propertyId)
            }
            localStorage.setItem("localStorageFavorites", JSON.stringify(state.favorites))
        }
    }
})

export const {toggleFavorite}=favoriteSlice.actions
export default favoriteSlice.reducer