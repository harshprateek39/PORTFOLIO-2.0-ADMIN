import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import  '../App.css';
import { motion, spring } from 'framer-motion';
import { Link } from "react-router-dom";
const InnerHeader = ({buttons ,active,setActive}) => {

  return (
    <div className=' flex  gap-4    '>
    {buttons&&buttons.map((item,index)=>
    <button    key={index}  onClick={()=>{setActive(index); }}  className= {active!==index?'bg-[#FF2E63]  p-2 cursor-pointer min-w-80   rounded-md flex justify-center   lg:text-base  font-semibold hover:bg-[#FF2E63]/70 transition-all  duration-200':'bg-[#FF2E63]/60 p-2 min-w-80 cursor-pointer justify-center  rounded-md flex   lg:text-base  font-semibold hover:bg-[#747264]/70 transition-all duration-200'}>
    <motion.div className=' font-sans '  layout transition={spring} >{item.title}</motion.div> </button>
    )} 
     </div> 
  )
}

export default InnerHeader