import React, { useEffect, useRef, useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { MdModeEdit } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import { addSkills } from '../../store/slices/skillsSlice';
const Heading2 = () => {
  const skills = useSelector(state => state.skills); // Accessing the skills state
  const dispatch = useDispatch();
  const ref1=useRef(null);
  const [SkillData,setSkillData] =useState([]);
  const [skillEditMode, setSkillEditMode] = useState(false);
  const [editState,setEditState] =useState(false);
  const [currentEditingSKill,setCurrentEditingSKill] =useState(null);
  const [skilleditState,setSkillEditState] =useState(false);
  const [editData,setEditDataState]=useState("Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum numquam quidem labore quibusdam debitis nihil ab vel quam obcaecati similique atque quod accusantiu")
  const [skill, setSkill] = useState("");
  
   const handleAdd=()=>{ 
    if(skill.length!=0){
    setSkillData(prev=> [...prev , skill]);
    dispatch(addSkills(skill))
    setSkill("");} 
   }
   const handleEdit=(index)=>{
      setSkillData(prev=>{
 
        const updatedSkills = [...prev]; // Create a copy of the previous array
        updatedSkills[currentEditingSKill] = skill; // Update the specific skill
        return updatedSkills;
      });
      setCurrentEditingSKill(null);
      setSkill("");
      setSkillEditState(false);
       setCurrentEditingSKill(null);
   }
    useEffect(()=>{

    },[skills])
  return (
    <div className=' py-4 text-white h-full'>
      <div className=' rounded-md flex grow md:flex-row flex-col gap-2  ring-1 p-1 ring-black '> 
      {skillEditMode?<div className=' w-full rounded-md flex flex-col justify-center   md:w-1/2'>
         <div className=' h-[200px] overflow-y-auto md:min-h-[50vh] '>
         <div className=' flex flex-wrap  p-1 gap-5 md:p-2'>
       {SkillData.map((item,index)=><div className=' text-sm rounded-full px-3 py-1  md:px-6 md:py-3 my-2 bg-white/30 relative' key={index}>
       <div className=' absolute -right-2 -bottom-2  cursor-pointer hover:bg-white/40 rounded-full p-[1px] bg-white/30 ' onClick={()=>{ setSkill(item); setSkillEditState(true); setCurrentEditingSKill(index); }}>
       <MdModeEdit className=''/> </div>
       <div className=' absolute -right-2 -top-2 cursor-pointer hover:bg-white/40 rounded-full p-[1px] bg-white/30 ' onClick={()=>{ setSkillData(SkillData.filter((item,indexx)=>index!=indexx &&item))}}>
       <RxCross2 className=''/> </div>{item}</div>)}</div>
         </div>
      <div className=' flex justify-between gap-2 p-2'>
      <input type='text' autoFocus  className=' w-full bg-transparent/20 p-2 rounded-lg  ' onChange={(e)=>setSkill(e.target.value)} value={skill} placeholder=' Add New Skills...'></input>
      {skilleditState&&<>
        {skill.length>0?<button onClick={()=>handleEdit()}   className=' bg-green-500 hover:bg-green-400  rounded-md p-2'><FaCheck/></button>:""}
        <button onClick={()=>{setSkill("");setSkillEditState(false); setCurrentEditingSKill(null);  }}   className=' bg-red-500 hover:bg-red-400  rounded-md p-2'><RxCross2/></button></>}
        {!skilleditState&&<button onClick={handleAdd} className=' bg-blue-500 hover:bg-blue-400 w-full rounded-md p-2'>ADD</button>}
        <button onClick={()=>{handleAdd(); setSkillEditMode(false)}} className=' bg-green-500 hover:bg-blue-400 w-full rounded-md p-2'>SAVE</button>
        <button onClick={()=>setSkillEditMode(false)} className=' bg-red-500 hover:bg-blue-400 w-full rounded-md p-2'>CANCEL</button>
      </div>
      </div>:<div className=' w-full rounded-md flex flex-col justify-center   md:w-1/2'>
         <div className=' h-[200px] overflow-y-auto md:min-h-[50vh] '>
         <div className=' flex flex-wrap  p-1 gap-5 md:p-2'>
       {skills?.map((item,index)=><div className=' text-sm rounded-full px-3 py-1  md:px-6 md:py-3 my-2 bg-white/30 relative' key={index}>
      
    {item}</div>)}</div>
         </div>
      <div className=' flex justify-between gap-2 p-2'>
     
       
        <button onClick={()=>{setSkillEditMode(true); setSkillData(skills)}} className=' bg-blue-500 hover:bg-blue-400 w-full rounded-md p-2'>EDIT</button>
      </div>
      </div>}
      <div className=' w-full rounded-md flex flex-col    md:w-1/2'>
        <div className=' bg-white/10 w-full md:h-full p-2 h-[250px]  md:max-h-[50vh] rounded-md overflow-y-auto'>
         {!editState?editData:<textarea autoFocus className=' w-full h-full rounded-md bg-transparent p-2' value={editData} onChange={ (e)=>setEditDataState(e.target.value)} />} 
         
        </div>
        <div className=' flex justify-between gap-2 p-2'>
        <button onClick={()=>setEditState(prev=>!prev)} className=' bg-blue-500 w-full rounded-md p-2'>{!editState?"Edit":"Done"}</button>
        <button className=' bg-green-500 w-full rounded-md p-2'  >Save</button>
        
      </div>
      </div>
      </div>
    </div>
  )
}

export default Heading2 