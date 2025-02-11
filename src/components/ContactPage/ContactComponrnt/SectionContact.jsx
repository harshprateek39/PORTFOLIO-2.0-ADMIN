import React, { useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage ,useFormik } from 'formik';
import * as Yup from 'yup';
import { FaRegCircleCheck } from "react-icons/fa6";
import { MdEdit, MdModeEdit } from "react-icons/md";
import { RxCross2 } from 'react-icons/rx';
const SectionContact = ({achievment}) => {
   
    const [achievments,setAchievments]=useState(achievment);
   
    const handleDelete=(idd)=>{
      console.log(idd);
      
    }

  return (
    <>  
      <div className=' w-full rounded-md flex flex-col    h-full  '>
        <div className=' bg-white/10 rounded-md p-1 gap-2 md:px-2   flex flex-col h-full text-white'>
        <h1 className='  font-semibold md:text-2xl  '>{achievments.name}</h1>
      
    
         
          <div className= ' w-full  grow  md:max-h-[400px] max-h-[200px]    bg-white/10  p-1 overflow-y-auto   rounded-md '><p>{achievments.message}</p></div>
       
       
         
          <div className='w-full  flex  items-end flex-col gap-2  p-1  rounded-md'>
          
          <>
         <h1>EMAIL:  <span className=' bg-white/20 rounded-md p-1 px-2'> {achievments.email}</span> </h1>
         <h1>DATE: <span className=' bg-white/20 rounded-md p-1'> {achievments.date}</span> </h1></>
         <button className=' bg-red-500 p-1 rounded-md w-full text-white font-semibold self-start'>DELETE CURRENT</button>
         </div>
         <div>

         </div>
         
        </div>
        
         
      </div>
    </>
  )
 }

export default SectionContact;