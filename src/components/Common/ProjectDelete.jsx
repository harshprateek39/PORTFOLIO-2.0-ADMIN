import React from 'react'

const ProjectDelete = ({fn,id,name}) => {
  return (
    <div  className=' bg-black/80 rounded-md backdrop-blur items-center justify-center h-full w-full absolute z-50 overflow-y-auto  gap-3 text-white flex flex-col p-2 text-center  md:text-3xl'>
      <h1>Are you sure want to delete current {name} ?</h1> 
      <div className=' flex justify-between gap-3'>
        <button onClick={()=>{}} className=' bg-red-500 text-white px-1 font-bold md:text-2xl rounded-md'>YES</button>
        <button  onClick={()=>{fn(false)}} className=' bg-gray-500 text-white px-1 font-bold md:text-2xl rounded-md'>NO</button>
      </div>
    </div>
  )
}

export default ProjectDelete