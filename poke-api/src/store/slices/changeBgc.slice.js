import {createSlice} from "@reduxjs/toolkit";

const changeBgcDarkSlice=createSlice({

    name:"changeBgcDark",
    initialState:"false",
reducers:
{
setChangeBgcDarkGlobal: (state, action) => action.payload
}

})


export const {setChangeBgcDarkGlobal}=changeBgcDarkSlice.actions

export default changeBgcDarkSlice.reducer



