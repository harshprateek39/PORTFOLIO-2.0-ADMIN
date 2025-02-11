import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "./slices/loginSlice";
import homeSlice from "./slices/homeSlice";

const store =configureStore({
     reducer:{
         login:loginSlice.reducer,
         home:homeSlice
     }
}); 
export default store;