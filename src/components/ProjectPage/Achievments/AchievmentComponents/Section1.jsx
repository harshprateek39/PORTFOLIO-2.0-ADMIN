import React, { useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage ,useFormik } from 'formik';
import * as Yup from 'yup';
import { MdEdit } from "react-icons/md";
import AchievmentForm from './FormAchievment';
import ProjectDelete from '../../../Common/ProjectDelete';
const Section1 = ({achievment}) => {
     const [formState, setFormState] = useState(false);
     const [confirm, setConfirm] = useState(false);
    const [achievments,setAchievments]=useState(achievment);
    const handleChange=(e)=>{
        setAchievments({ ...achievments, [e.target.name]:e.target.value})
    }
    const [isSame,setIsSame]=useState(true);
    const [editState,setEditState]=useState(false);
    useEffect(()=>{
      if(JSON.stringify(achievment)==JSON.stringify(achievments)){
        setIsSame(true);
      }
      else setIsSame(false);
    },[achievments])
   const handleSubmit=(e)=>{
    e.preventDefault()
  console.log(achievments)
   }
   const [selectedFile, setSelectedFile] = useState(null);
    const handleFileChange = (event) => {
      // Get the selected file
      const file = event.target.files[0];
       // Set the selected file to state
       setSelectedFile(file);
       const data=URL.createObjectURL(file)
       setAchievments({...achievments, img:data})
    }; 
  return (
    <>
        { editState? <form className='w-full rounded-md flex flex-col  h-full ' onSubmit={handleSubmit}>  
        {/* {formik.errors.name&&formik.touched.name?<h1 className='  text-red-500'>{formik.errors.name}</h1>:""} */} 
        <div className=' bg-white/10 rounded-md p-1 gap-2  flex flex-col h-full text-white'>
        <input id='name'  name='name'onChange={(e)=>handleChange(e)}  autoFocus value={achievments.name} className=' border border-white text-lg py-2 px-1   font-semibold md:text-2xl bg-transparent  rounded-md '></input>
        <div className='flex md:flex-row flex-col w-full gap-1 '>
          {achievments.img?(<><div className='  md:w-3/5 relative   rounded-md '>
          <div className="relative">
      <button type='click' className='flex px-1 absolute py-1  ring-1 ring-black rounded-md justify-center items-center right-0 top-0 text-black bg-white/50 font-semibold'>
        <label className='w-full h-full cursor-pointer'>
          EDIT
          <input 
            className='hidden'
            type="file" 
            name='img'
            accept="image/*" 
            onChange={handleFileChange} 
          />
        </label>
      </button></div>
          <img className=' w-full rounded-md max-h-[200px] md:max-h-[300px]   object-cover' src={selectedFile?URL.createObjectURL(selectedFile):achievments.img}/></div>
         <textarea className='w-full md:w-2/5   bg-white/10 min-h-[150px]   p-1 overflow-y-auto max-h-[200px] border border-white  md:max-h-[300px] rounded-md 'id='description' name='description' onChange={(e)=>handleChange(e)}  value={achievments.description}></textarea></>):
          <textarea  className=' w-full    bg-white/10  p-1 min-h-[150px] overflow-y-auto md:max-h-[300px] border border-white  max-h-[200px] rounded-md'  id='description' name='description' onChange={(e)=>handleChange(e)}  value={achievments.description}></textarea>} 
        </div>
         {achievments.startDate&&achievments.endDate?
         <div className=' grow  justify-end gap-2 items-end  flex flex-col pb-2'>
          <p>Start Date :  <input className=' bg-white/10 rounded-md p-2 flex items-center'  type='date' id='Sdate' name='startDate' onChange={(e)=>handleChange(e)} value={achievments.startDate}></input></p>
          <p>End Date :      <input className=' bg-white/10 rounded-md p-2 flex items-center' name='endDate' onChange={(e)=>handleChange(e)}  type='date' value={achievments.endDate}></input></p>
         </div>:<div className=' grow flex flex-col pb-2 justify-end'>
          <p>Date : <input className=' bg-white/10 rounded-md p-2 flex items-center' type='date' id='Sdate' name='startDate' onChange={(e)=>handleChange(e)}  value={achievments.startDate}></input> </p>
         </div>}
        </div>
        <div className=' flex justify-between gap-2 p-2 w-full'>
        <button type='click' onClick={()=>setEditState(prev=>!prev)} className=' text-white font-semibold bg-blue-500 w-full rounded-md p-2'>{!editState?"Edit":"Done"}</button>
        {isSame?<button disabled  type='submit' className=' bg-gray-500 cursor-not-allowed   w-full rounded-md font-semibold p-2 text-white'  >Save</button>:
        <button  type='submit' className=' bg-green-500  w-full rounded-md font-semibold p-2 text-white'  >Save</button>}

      </div>
      </form>:
      <div className=' w-full rounded-md flex flex-col  h-full relative  '>
      { confirm&&<ProjectDelete fn={setConfirm}  name={"Achievment"}/>}
       { formState&&<AchievmentForm  fn={setFormState}  />}
        <div className=' bg-white/10 rounded-md p-1 gap-2  flex flex-col h-full text-white'>
        <div className=' flex  justify-between'>
        <h1 className='  font-semibold md:text-2xl  '>{achievments.name}</h1>
        <button onClick={()=>setConfirm(true)} className=' bg-red-500 font-semibold  text-white rounded-md p-1 px-2 '>DELETE CURRENT</button>
        </div>
        <div className='flex md:flex-row flex-col w-full gap-1 '>
          {achievments.img?(<><div className='  md:w-3/5  rounded-md '>
           <img className=' w-full rounded-md  max-h-[200px]  md:max-h-[300px]   object-cover' src={selectedFile?URL.createObjectURL(selectedFile):achievments.img}/></div>
          <div className= ' w-full md:w-2/5   bg-white/10  p-1 overflow-y-auto max-h-[150px]  md:max-h-[300px] rounded-md '><p>{achievments.description}</p></div></>):
          <div className= ' w-full    bg-white/10  p-1 overflow-y-auto md:max-h-[300px]  rounded-md '><p>{achievments.description}</p></div>} 
        </div>
         {achievments.startDate&&achievments.endDate?
         <div className=' grow  justify-end  flex flex-col pb-2'>
          <p>Start Date : {achievments.startDate}</p>
          <p>End Date : {achievments.endDate}</p>
         </div>:<div className=' grow flex flex-col pb-2 justify-end'>
          <p>Date : {achievments.startDate} </p>
         </div>}
        </div>
        <div className=' flex justify-between gap-2 p-2 w-full'>
        <button onClick={()=>setEditState(prev=>!prev)} className=' text-white font-semibold bg-blue-500 w-full rounded-md p-2'>{!editState?"Edit":"Done"}</button>
        {isSame?<button disabled  type='submit' className=' bg-gray-600 cursor-not-allowed   w-full rounded-md font-semibold p-2 text-white/50'  >Save</button>:
        <button  type='click' onClick={handleSubmit}  className=' bg-green-500  w-full rounded-md font-semibold p-2 text-white'  >Save</button>}
        <button onClick={()=>setFormState(true)} className=' text-white font-semibold bg-yellow-500 w-full rounded-md p-2'>ADD NEW!</button>
        
      </div>
         
      </div>}
    </>
  )
}

export default Section1