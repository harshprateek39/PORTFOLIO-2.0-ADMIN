import { createSlice } from "@reduxjs/toolkit";
const loginSlice=createSlice({
    name:'login',
    initialState:false,
    reducers:{
         loginStatus:(state,action)=>action.payload
    }
});
export {loginSlice};
export const { loginStatus} =loginSlice.actions;