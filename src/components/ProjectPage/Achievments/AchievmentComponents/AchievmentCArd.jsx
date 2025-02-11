import React from 'react'

const AchievmentCArd = ({value ,func,index}) => {
  return (
    <div  onClick={()=>func(index)} className=' ach snap-start bg-white/30 min-w-[200px]  flex flex-col items-start rounded-md py-2 px-0.5   text-white hover:bg-white/35 cursor-pointer  '>
    <h1 className='font-medium px-2 '> {value.name}</h1>
    <hr className=' w-full text-red-400 border-black/20 border-1 rounded-full '/>
     <p className='px-2  text-xs md:text-sm'>{value.description.length>50?value.description.slice(0,30)+"...":value.description}</p>
     <p className=' px-2 text-xs md:text-sm grow flex flex-col justify-end   '>Date - {value.startDate}</p>
    </div>
  )
}

export default AchievmentCArd