import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const url="http://localhost:8000/api/v1"
const initialState={
    data:{
         image:"https://cdn.pixabay.com/photo/2017/02/12/21/29/false-2061132_640.png",
         description:"NOT AUTHORISED"
    },
    loading:false,
    error:null,
    fulfilled:false,
    message:"Home Page Data Queued",
}
export const fetchHome = createAsyncThunk("home/getDetail",async()=>{
    try {
        const data= await axios.get(`${url}/home`);
        const res= {image:data.data.data.image.url, description:data.data.data.description}
        console.log(res);
              return res;
    } catch (error) {
         console.log(error);
    }
});
export const updateHomeImage = createAsyncThunk ("home/image" ,async(image)=>{
    try {
        console.log(image)
        const result=await axios.put(`${url}/home/image`,{image:image});
        console.log(result?.data?.data);
        return result?.data?.data;
    } catch (error) {
         console.log(error);
    }
});
export const updateHomeDescription = createAsyncThunk ("home/description" ,async(description)=>{
    try {
        console.log(description);
        const result=await axios.put(`${url}/home/description`,{description:description});
        console.log(result?.data?.data);
        return result?.data?.data;
    } catch (error) {
         console.log(error);
    }
});
const homeslice= createSlice({
    name:"home",initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchHome.pending ,(state,action)=>{
           state.loading = true;
           state.message="Home page Detatail loading...";
        })
        .addCase(fetchHome.fulfilled,(state,action)=>{
            state.loading =false;
            state.data=action.payload;
            state.fulfilled=true;
            state.message="Home Detail Loaded";
        }).addCase(fetchHome.rejected ,(state,action)=>{
            state.loading = true;
            state.error=true;
        }).addCase(updateHomeImage.rejected ,(state,action)=>{
            state.loading = false;
            state.error=true;
        }).addCase(updateHomeImage.fulfilled ,(state,action)=>{
            state.loading = false;
            state.error=false;
            state.data.image=action.payload;
        }).addCase(updateHomeImage.pending ,(state,action)=>{
            state.loading = true;
            state.data.image="https://hackernoon.com/images/0*4Gzjgh9Y7Gu8KEtZ.gif";
        }).addCase(updateHomeDescription.pending ,(state,action)=>{
            state.loading = true;
            state.data.description="Updating...";
        }).addCase(updateHomeDescription.fulfilled ,(state,action)=>{
            state.loading = false;
            state.data.description=action.payload;
        }).addCase(updateHomeDescription.rejected ,(state,action)=>{
            state.loading = false;
            state.error=true;
        })
    }
});
export const { /* additional synchronous action creators if needed */ } = homeslice.actions;
export default homeslice.reducer;
