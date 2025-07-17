import {createSlice} from "@reduxjs/toolkit"

const initialState={
    minPrice:"",
    maxPrice:"",
    propertyType:"",
    bedrooms:""
}

const filterSlice=createSlice({
    name:"filter",
    initialState,
    reducers:{
        setFilters:(state, action)=>{
            const {minPrice, maxPrice, propertyType, bedrooms}=action.payload
            state.minPrice=minPrice
            state.maxPrice=maxPrice
            state.propertyType=propertyType
            state.bedrooms=bedrooms
        }
    }
})

export const {setFilters}=filterSlice.actions
export default filterSlice.reducer