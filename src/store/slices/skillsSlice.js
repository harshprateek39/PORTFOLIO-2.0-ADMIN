import { createSlice } from "@reduxjs/toolkit";
const skillsSlice=createSlice({
    name:'skills',
    initialState:["C++","HTML","NODE JS"],
    reducers:{
         addSkills:(state,action)=>[...state,action.payload]
    }

});
export {skillsSlice};
export const { addSkills,deleteSkills,editSkills} =skillsSlice.actions;