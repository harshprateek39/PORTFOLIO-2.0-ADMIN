import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchHome } from '../store/slices/homeSlice';


const LoadingPage = ({setLoading}) => {
  const [message,setMessage]=useState("Waiting...");
  const dispatch = useDispatch();
  
  const homeStatus=useSelector((state)=>state.home.message);
  const homeLoading=useSelector((state)=>state.home.loading);
  const homeError=useSelector((state)=>state.home.error);
  const homeFullfield=useSelector((state)=>state.home.fulfilled);
  const getData=async()=>{
    try {
      
      await dispatch(fetchHome());
      setTimeout(()=>{
        setLoading(false);
      },1000);
     
    } catch (error) {
      
    }
    
  }
   useEffect(()=>{
    getData();
   },[])
  return (
    <div>
    {homeError? <h1 className=" text-red-500 ">{homeStatus}</h1>:<>{ homeFullfield?<h1 className=' text-green-500'>{homeStatus}</h1>: <h1 className={homeLoading?"text-blue-500":" text-gray-500"}>{homeStatus}</h1>}</>}
      
    </div>
  )
}

export default LoadingPage