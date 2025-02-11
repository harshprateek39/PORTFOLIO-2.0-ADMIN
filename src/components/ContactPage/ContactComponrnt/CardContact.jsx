import React from 'react'

const CardContact = ({value ,func,index}) => {
  return (
    <div  onClick={()=>func(index)} className='  md:snap-start bg-white/30  poplu   flex flex-col items-start rounded-md py-2 px-0.5   text-white hover:bg-white/35 cursor-pointer  '>
     <div className=' flex min-w-full  justify-between items-baseline'><p className='font-medium px-2 text-sm '> {value.name}</p><p className='font-medium px-2 text-xs '> {value.email}</p></div>
    <hr className=' w-full text-red-400 border-black/20 border-1 rounded-full '/>
     <p className='px-2  text-xs md:text-sm grow '>{value.message.length>50?value.message.slice(0,30)+"...":value.message}</p>
     <p className=' px-2 text-xs md:text-sm  justify-self-end flex flex-col justify-end  bg-white/20 rounded-md my-1 py-0.5  '>Date - {value.date}</p>
    </div>
  )
}

export default CardContact; 