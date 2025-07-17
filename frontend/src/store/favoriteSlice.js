import {createSlice} from "@reduxjs/toolkit"

const initialState={
    favorites:[]
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
        }
    }
})

export const {toggleFavorite}=favoriteSlice.actions
export default favoriteSlice.reducer