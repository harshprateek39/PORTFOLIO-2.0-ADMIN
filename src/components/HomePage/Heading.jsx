import React, { useEffect, useState } from 'react'
import axios from "axios";
import imageCompression from 'browser-image-compression';
import { useDispatch, useSelector } from 'react-redux';
import { updateHomeDescription, updateHomeImage } from '../../store/slices/homeSlice';
const Heading = () => {
  const dispatch =useDispatch();
    const data=useSelector((state)=>
      state.home.data 
    )
  const [editData,setEditDataState] =useState(data?.description);
  const [editState,setEditState] =useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
   
    const handleFileChange = async(event) => {
      const file = event.target.files[0];
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
      }
      setSelectedFile("https://hackernoon.com/images/0*4Gzjgh9Y7Gu8KEtZ.gif");
      const compressedFile = await imageCompression(file, options);
      console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB
      const reader = new FileReader();
      reader.readAsDataURL(compressedFile);
      reader.onloadend = () => {
        setSelectedFile(reader.result);
      };
  
    };

    const getDetail= async()=>{
  
    }
    useEffect(()=>{
 getDetail();
    },[])
  return (
    <div className=' py-4 text-white'>
      <div className=' rounded-md flex md:flex-row flex-col gap-2  ring-1 p-1 ring-black '> 
      <div className=' w-full rounded-md flex flex-col justify-center  md:w-1/2'>
     
      <img className='  bg-transparent  h-[30vh]  md:h-[50vh] rounded-md  object-cover' src={selectedFile?selectedFile:data.image}></img>
      <div className=' flex justify-between gap-2 p-2'>
        <button  className=' bg-blue-500 w-full flex px-2  rounded-md  font-semibold'>
        <label className='  py-2 grow  h-full cursor-pointer  '>
        Change
        <input 
      className=' hidden'
        type="file" 
        accept="image/*" 
        onChange={handleFileChange} 
      /></label>
        </button>
        
        {selectedFile? <button onClick={()=>{dispatch(updateHomeImage(selectedFile)); setSelectedFile(false);}}  className=' bg-green-500 w-full rounded-md p-2'>Save</button>:<button disabled className=' bg-gray-500 w-full rounded-md p-2'>Save</button>}
      </div>
      </div>
      <div className=' w-full rounded-md flex flex-col   md:w-1/2'>
        <div className=' bg-white/10 w-full h-[200px] md:h-full p-2 md:min-h-[200px]  md:max-h-[50vh] rounded-md overflow-y-auto'>
         {!editState?data.description:<textarea autoFocus className=' w-full min-h-[200px] h-full rounded-md bg-transparent p-2' value={editData} onChange={ (e)=>setEditDataState(e.target.value)} />} 
         
        </div>
        <div className=' flex justify-between gap-2 p-2'>
        <button onClick={()=>{setEditState(prev=>!prev); setEditDataState(data.description)}} className=' bg-blue-500 w-full rounded-md p-2'>{!editState?"Edit":"Cancel"}</button>
        {editData!=data.description? <button onClick={()=>{dispatch(updateHomeDescription(editData)); setEditState(false); }}  className=' bg-green-500 w-full rounded-md p-2'>Save</button>:<button disabled className=' bg-gray-500 w-full rounded-md p-2'>Save</button>}
     
        
      </div>
      </div>
      </div>
    </div>
  )
}

export default Heading