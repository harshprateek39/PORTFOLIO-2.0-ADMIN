import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from '../components/Header';
import Heading from '../components/HomePage/Heading';
import Heading2 from '../components/AboutPage/Heading2';
import {
    BrowserRouter,
    createBrowserRouter,
    RouterProvider,
    useNavigate
  } from "react-router-dom";
import InnerHeader from '../components/InnerHeader';
import axios from 'axios';
// const router = createBrowserRouter([
//     {
//         path:"/",
        
//       children:[
//         {
//           path:"/",
//           element:<div className=' bg-[#08D9D6] h-[100vh] md:grid grid-flow-col grid-cols-8 md:p-4 gap-4 flex flex-col p-1  '>
//           <Header  /> 
//           <TopmostPage components={[<Heading/>,<Heading2/>]}/></div>,
//         },
//         {
//           path:'/about',
//           element:<div className=' bg-[#08D9D6] h-[100vh] md:grid grid-flow-col grid-cols-8 md:p-4 gap-4 flex flex-col p-1  '>
//           <Header  /> 
//           <TopmostPage titlee={"feffffffffffffff"}/></div>,
//         },
//         {
//           path:'/project',
//           element:<div className=' bg-[#08D9D6] h-[100vh] md:grid grid-flow-col grid-cols-8 md:p-4 gap-4 flex flex-col p-1  '>
//           <Header  /> 
//           <TopmostPage/></div>,
//         },
//         {
//           path:'/contact',
//           element:<div className=' bg-[#08D9D6] h-[100vh] md:grid grid-flow-col grid-cols-8 md:p-4 gap-4 flex flex-col p-1  '>
//           <Header  /> 
//           <TopmostPage/></div>,
         
//         },
       
        
//       ],
//     },
//   ]);

const TopmostPage = ({titlee,components}) => {
  const navigate=useNavigate();
  const verify=async()=>{
    try {
      const data=await  axios.get('http://localhost:8000/verify',{withCredentials: true})
      console.log(data);
     } catch (error) {
      navigate("/login")
     }
  }
  useEffect(()=>{
      verify();
  },[])
    const [active,setActive]=useState(0);
  return (
<div className=' bg-[#252A34] p-2 mt-12 md:mt-0 md:p-4 rounded-2xl shadow-black flex flex-col shadow-2xl md:h-full     md:col-span-6  '>
 <div className=' w-full overflow-x-auto border py-2 flex items-center overflow-y-clip    bg-black/30 px-2  rounded-xl  '>
 <InnerHeader active={active} setActive={setActive} buttons={components} /></div> 
 <div className=' h-full flex flex-col'>
    {components&&components.map((item,index)=> index==active&&< div key={index}>{item.element}</div>)}
 </div>
 </div>
  
  )
}

export default TopmostPage