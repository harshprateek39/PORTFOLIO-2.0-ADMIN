
import React, { useState } from 'react';

import { MdModeEdit } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
const ProjectForm = ({fn})=>{
  const [formData, setFormData] = useState({
    name: '',
    title:'',
    description: '',
    startDate: '',
    image: '',
    gitHubLink:"",
    LiveLink:"",
    technologies:[]
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    const errors = {};
    if (!formData.title) {
      errors.name = 'Title is required';
    }
    if (!formData.name) {
      errors.name = 'Name is required';
    }
    if (!formData.description) {
      errors.description = 'Description is required';
    }
    if (!formData.startDate) {
      errors.startDate = 'Start Date is required';
    }
    if (!formData.gitHubLink) {
        errors.startDate = 'GitHub Link is required';
      }
      if (!formData.LiveLink) {
        errors.startDate = 'LiveLink Link is required';
      }
      if(formData.technologies.length==0){
        errors.technologies = 'Add Atleast 1 tech';
      }
      if(formData.technologies.length>=10){
        errors.technologies = 'Limit 10';
      }
    setErrors(errors);
    // If there are no errors, submit the form
    if (Object.keys(errors).length === 0) {
      // Handle form submission here
      console.log('Form submitted:', formData);
      fn(false);
    }
    
  };
  const [SkillData,setSkillData] =useState([ ""]);
   const [currentEditingSKill,setCurrentEditingSKill] =useState(null);
  const [skilleditState,setSkillEditState] =useState(false);
   const [skill, setSkill] = useState("");
  
   const handleAdd=()=>{
    if(skill.length!=0){
    setFormData(prev=>{ return { ...prev , technologies:[...prev.technologies , skill]}})
    
    setSkill("");} 
   }
   const handleEdit=(index)=>{
    const updatedSkills = [...formData.technologies]; // Create a copy of the previous array
    updatedSkills[currentEditingSKill] = skill; // Update the specific skill
    setFormData(prev=>{ return { ...prev , technologies:updatedSkills}})
      setCurrentEditingSKill(null);
      setSkill("");
      setSkillEditState(false);
       setCurrentEditingSKill(null);
   }
    const handleDelete=(id)=>{
        const updatedSkills = [...formData.technologies];
        updatedSkills.splice(id,1);
        setFormData(prev=>{ return { ...prev , technologies:updatedSkills}})
         
    }
  return (
    <div  className=' bg-black/80 rounded-md backdrop-blur h-full w-full absolute  overflow-y-auto md:p-2 p-1  text-white flex flex-col '>
    <button type='click' onClick={()=>fn(false)} className=' bg-red-500 text-white  rounded-full font-bold absolute right-2 top-2 text-xl md:text-2xl md:p-1 p-1 '> <RxCross2 className='  '/></button>
    <h1 className=' self-center  md:text-xl font-semibold pb-4'> Add New Project</h1>
   
 

    <form onSubmit={handleSubmit} className=" flex flex-col w-full overflow-y-auto  ">
    <div className=' flex w-full md:flex-row flex-col gap-2 '>
    <div className=' w-full flex flex-col gap-2 '>
    <div className="">
        <label className="block text-gray-500 text-sm font-bold mb-2">Title<sup className=' text-red-500'>*</sup>:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.title && <span className="text-red-500 text-sm">{errors.title}</span>}
      </div>
      <div className=" w-full  ">
        <label className="block text-gray-500 text-sm font-bold mb-2">Name:<sup className=' text-red-500'>*</sup></label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
      </div>
      <div className=" ">
        <label className="block text-gray-500 text-sm font-bold mb-2">Description<sup className=' text-red-500'>*</sup>:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        ></textarea>
        {errors.description && <span className="text-red-500 text-sm">{errors.description}</span>}
      </div>
      <div className=" ">
        <label className="block text-gray-500 text-sm font-bold mb-2">Start Date<sup className=' text-red-500'>*</sup>:</label>
        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.startDate && <span className="text-red-500 text-sm">{errors.startDate}</span>}
      </div>
      <div className=" w-full ">
        <label className="block text-gray-500 text-sm font-bold mb-2">Git-Hub Link:</label>
        <input
          type="text"
          name="gitHubLink"
          value={formData.gitHubLink}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.gitHubLink && <span className="text-red-500 text-sm">{errors.gitHubLink}</span>}
      </div>
      <div className=" w-full ">
        <label className="block text-gray-500 text-sm font-bold mb-2">Live Link:</label>
        <input
          type="text"
          name="LiveLink"
          value={formData.LiveLink}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.LiveLink && <span className="text-red-500 text-sm">{errors.LiveLink}</span>}
      </div>
      <div className=" mb-1 ">
        <label className="block text-gray-500 text-sm font-bold mb-2">Image:</label>
        <input
          type="file"
          accept="image/*"
          name="image"
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div></div>
      <div className=' w-full rounded-md flex flex-col   '>
      {errors.technologies && <span className="text-red-500 text-sm">{errors.technologies}</span>}
         <div className=' h-[200px] bg-white/10  rounded-md   overflow-y-auto md:min-h-[50vh] '>
         <div className=' flex  ustify-start rounded-md  p-1 '>
         <div className=' flex flex-wrap items-start  w-full  justify-start  gap-5 '>
         
       {formData.technologies.map((item,index)=><div className=' text-sm rounded-full px-3 py-1  md:px-6 md:py-3 my-2 bg-white/30 relative' key={index}>
       <button type='button' className=' absolute -right-2 -bottom-2  cursor-pointer hover:bg-white/40 rounded-full p-[1px] bg-white/30 '  onClick={()=>{ setSkill(item); setSkillEditState(true); setCurrentEditingSKill(index); }}>
       <MdModeEdit className=''/> </button>
       
       <button type='button' className=' absolute -right-2 -top-2 cursor-pointer hover:bg-white/40 rounded-full p-[1px] bg-white/30 ' onClick={()=>handleDelete(index)}>
       <RxCross2 className=''/> </button>{item}</div>)}</div>
         </div>

         </div>
      <div className=' flex justify-between  gap-2 p-2 '>
      <input type='text' autoFocus  className=' w-full bg-transparent/20 p-2 rounded-lg  ' onChange={(e)=>setSkill(e.target.value)} value={skill} placeholder=' Add New Skills...'></input>
      {skilleditState&&<>
        {skill.length>0?<button type='button' onClick={()=>handleEdit()}   className=' bg-green-500 hover:bg-green-400  rounded-md p-2'><FaCheck/></button>:""}
        <button type='button'  onClick={()=>{setSkill("");setSkillEditState(false); setCurrentEditingSKill(null);  }}   className=' bg-red-500 hover:bg-red-400  rounded-md p-2'><RxCross2/></button></>}
        <button type='button' onClick={handleAdd} className=' bg-blue-500 hover:bg-blue-400 w-full rounded-md p-2 '>ADD</button>
      </div>
      </div>
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Submit
      </button>
      
    </form>



     </div>
  )
}

export default ProjectForm