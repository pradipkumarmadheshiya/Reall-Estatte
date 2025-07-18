import {createSlice} from "@reduxjs/toolkit"

const initialState={
    selectedProperty:null
}

const selectedPropertySlice=createSlice({
    name:"selectedProperty",
    initialState,
    reducers:{
        setSelectedProperty:(state, action)=>{
            state.selectedProperty=action.payload
        }
    }
})

export const {setSelectedProperty}=selectedPropertySlice.actions
export default selectedPropertySlice.reducer