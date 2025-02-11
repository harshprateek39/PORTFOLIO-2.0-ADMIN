import React, { useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage ,useFormik } from 'formik';
import * as Yup from 'yup';
import { FaRegCircleCheck } from "react-icons/fa6";
import { MdEdit, MdModeEdit } from "react-icons/md";
import { RxCross2 } from 'react-icons/rx';
import ProjectFOrm from './FormProject';
import ProjectDelete from '../../../Common/ProjectDelete';
const SectionProject = ({achievment}) => {
    const [formState,setFormState]=useState(false);
    const [confirm,setConfirm]=useState(false);
    const [achievments,setAchievments]=useState(achievment);
    const [techEdit,settechEdit] = useState(-1);
    const [techData,settechData] = useState("");
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

   const handleSubmit=(event)=>{
    event.preventDefault();
       console.log(achievments);
   }
   const [selectedFile, setSelectedFile] = useState(null);
  
    const handleFileChange = (event) => {
      // Get the selected file
      event.preventDefault();
      const file = event.target.files[0];
      
      // Set the selected file to state
       setSelectedFile(file);
       const data=URL.createObjectURL(file)
       setAchievments({...achievments, img:data})

    }; 
    const handleDelete=(idd)=>{
      console.log(idd);
       
      setAchievments({...achievments, technologies:achievments.technologies.filter((item,index)=>index!=idd)})
      
    }
    
  return (
    <>
    
        { editState? <form className='w-full rounded-md flex flex-col  h-full ' onSubmit={ handleSubmit}>
         
        {/* {formik.errors.name&&formik.touched.name?<h1 className='  text-red-500'>{formik.errors.name}</h1>:""} */}
       
        <div className=' bg-white/10 rounded-md p-1 gap-2  flex flex-col h-full text-white'>
        <input id='name'  name='name' onChange={(e)=>handleChange(e)}  autoFocus value={achievments.name} className=' border border-white text-lg py-2 px-1   font-semibold md:text-2xl bg-transparent  rounded-md '></input>
        <div className='flex md:flex-row flex-col w-full gap-1 '>
          {achievments.img?(<><div className='  md:w-3/5 relative   rounded-md '>
          <div className="relative">
      <button type="button" className='flex px-1 absolute py-1  ring-1 ring-black rounded-md justify-center items-center right-0 top-0 text-black bg-white/50 font-semibold'>
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
        <div className='   w-full md:justify-between  flex flex-col md:flex-row pb-2 gap-2  rounded-md py-2'>
         <div className='  flex w-full flex-col gap-1 max-h-[170px] md:max-h-[120px] overflow-y-auto  scroll-smooth p-1 rounded-md ring-1 ring-white/30  md:w-1/3 '>
           {
            achievments.technologies.map((item,idd)=>{ 
                          return <div key={idd} className=' text-xl flex justify-between items-center gap-1'>
                          { techEdit!=idd?<>
                          <button type="button" onClick={()=>{settechData(item); settechEdit(idd); }}>  <MdModeEdit className=' bg-white/10 rounded-full'/></button>
                           <h1 className=' bg-white/20 w-full text-center py-0.5  rounded-lg' >{item}</h1>
                           <button type="button" onClick={()=>handleDelete(idd)} ><RxCross2 className='bg-white/10 rounded-full'/>
                            </button></>:<> <input type='text' className=' w-full bg-white/10 rounded-md' value={techData} onChange={(e)=>settechData(e.target.value)}  />
                            <button type="button" onClick={()=>{settechEdit(-1); setAchievments(prev=> { const data=prev.technologies; data.splice(idd,1,techData); return {...achievments , technologies:data}}) }} >  <FaRegCircleCheck className=' bg-white/10 rounded-full'/></button>
                            </>} </div>
            })
           }
         </div>
          <div className=' md:w-2/3  flex flex-wrap items-end flex-col gap-2  p-1 bg-white/10 rounded-md'>
         <h1>GIT HUB LINK: <input type='text' autoFocus name='gitHubLink' onChange={(e)=>handleChange(e)} value={achievments.gitHubLink} className=' bg-white/20 rounded-md p-1'/></h1>
         <h1>LIVE LINK: <input type='text' autoFocus name='LiveLink' onChange={(e)=>handleChange(e)} value={achievments.LiveLink} className=' bg-white/20 rounded-md p-1'/>  </h1>
         </div>
         <div>

         </div>
         </div>
         
        </div>
        <div className=' flex justify-between gap-2 p-2 w-full'>
        <button onClick={()=>setEditState(prev=>!prev)} className=' text-white font-semibold bg-blue-500 w-full rounded-md p-2'>{!editState?"Edit":"Done"}</button>
        {isSame?<button disabled  type='submit' className=' bg-gray-500 cursor-not-allowed   w-full rounded-md font-semibold p-2 text-white'  >Save</button>:
        <button  type='submit' className=' bg-green-500  w-full rounded-md font-semibold p-2 text-white'  >Save</button>}

      </div>
      </form>: 
      <div className=' w-full rounded-md flex flex-col  relative h-full  '>
      { confirm&&<ProjectDelete fn={setConfirm}  name={"Project"}/>}
      { formState&&<ProjectFOrm  fn={setFormState} />}
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
       
         <div className='   w-full md:justify-between  flex flex-col md:flex-row pb-2 gap-2  rounded-md py-2'>
         <div className='  flex w-full flex-col gap-1 max-h-[170px] md:max-h-[120px] overflow-y-auto  scroll-smooth p-1 rounded-md ring-1 ring-white/30  md:w-1/3 '>
           {
            achievments.technologies.map((item,id)=>{
                          return  <h1  className=' bg-white/20 w-full  text-center py-0.5  rounded-lg' key={id}>{item}</h1>
            })
           }
         </div>
          <div className=' md:w-2/3  flex flex-wrap items-end flex-col gap-2  p-1 bg-white/10 rounded-md'>
         <h1>GIT HUB LINK: <span className=' bg-white/20 rounded-md p-1'> {achievments.gitHubLink}</span> </h1>
         <h1>LIVE LINK: <span className=' bg-white/20 rounded-md p-1'> {achievments.LiveLink}</span> </h1>
         </div>
         <div>

         </div>
         </div>
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

export default SectionProject;