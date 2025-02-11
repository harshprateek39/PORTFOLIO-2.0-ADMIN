import React, { useRef, useState } from 'react'
import { Outlet } from 'react-router-dom'
import  '../App.css';
import { motion, spring } from 'framer-motion';
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'
import { RiMenu4Line } from "react-icons/ri";
import { FaCross } from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';
const Header = () => {
  const ref1=useRef(null);
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })
  const [active,setActive]=useState(-1);
  const [toogle,setToogle]=useState(false);
  const buttons= [{title:"Home",link:"/"} ,{title:"About",link:"/about"},{title:"Project",link:"/project"},{title:"Contact",link:"/contact"}];
  return (<>
   {!isTabletOrMobile? <div className='  md:col-span-2 text-[#EAEAEA] font-sans  '>
     <div  className=' max-h-[96vh]  bg-[#252A34] p-4 rounded-2xl shadow-black flex flex-col shadow-2xl md:h-full '>
     {/* desktop view */}
     <div className=' flex flex-col  grow justify-between py-8  gap-8'>
      <div className=' flex gap-2 items-center justify-center '>
       <img className=' rounded-full aspect-square lg:w-14 md:w-10 object-cover ring-1 ring-black' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNJryFTSQUV8Zuu_EGw2iUCpMbIIKWHBl2eQ&usqp=CAU' />
       <div className=' flex flex-col justify-between  '>
      <h1 className=' text-xs  font-medium'>Welcome</h1>
      <h2 className=' lg:text-lg  font-semibold'>Harsh Prateek</h2>
       </div>
      </div>
      <div className=' flex flex-col gap-4'>
      {buttons.map((item,index)=>
      <Link to={item.link}  data-active={active} key={index}  onClick={()=>{setActive(prev=>index); }}  className= {active!==index?'bg-[#FF2E63] p-2 cursor-pointer  rounded-xl flex justify-center   lg:text-base  font-semibold hover:bg-[#FF2E63]/70 transition-all  duration-200':'bg-[#FF2E63]/60 p-2 cursor-pointer  rounded-xl flex   lg:text-base  font-semibold hover:bg-[#747264]/70 transition-all duration-200'}>
      <motion.div className=' font-sans '  layout transition={spring} >{item.title}</motion.div> </Link>
      )}
       
       </div> 
       <Link className=' bg-red-600 mx-auto gap-4 rounded-lg text-xs font-medium   px-5 py-2' to ="/login">Login</Link>
     </div>
      {/* desktop view */}

     </div>
    
    </div>:<>
    <div className=' flex w-[101%] bg-[#252A34] z-50 fixed left-0 -top-1 py-2 rounded-md justify-between items-center drop-shadow-md shadow-md shadow-black px-2 '>
 <span className=' p-1 hover:bg-white/20 flex justify-center items-center bg-white/10 rounded-md'>
 <button onClick={()=> ref1.current.style.transform="translateX(0)"}><RiMenu4Line className= ' text-2xl'></RiMenu4Line></button>
 </span>
 <div className=' relative'>
 
 <img className=' rounded-full aspect-square w-8 object-cover ring-1 m-0.5  ring-white' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNJryFTSQUV8Zuu_EGw2iUCpMbIIKWHBl2eQ&usqp=CAU' />
 </div>
    </div> 
    <div ref={ref1} onClick={()=> ref1.current.style.transform="translateX(-60vw)"} className=' transition-transform duration-200 ease-in-out translate-x-[-60vw] h-[100vh] w-[60vw] bg-black/60 backdrop-blur-lg z-50 flex flex-col backdrop-filter gap-10  fixed p-1  left-0 top-0 '>
       <button ><RxCross1 className=' text-4xl text-white font-bold bg-white/5 rounded-md p-1 self-end'/></button>
       <div className=' flex flex-col gap-4 px-4  '>
      {buttons.map((item,index)=>
      <Link to={item.link}  data-active={active} key={index}  onClick={()=>{setActive(prev=>index); }}  className= {active!==index?'bg-[#FF2E63] p-2 cursor-pointer  rounded-xl flex justify-center   lg:text-base  font-semibold hover:bg-[#FF2E63]/70 transition-all  duration-200':'bg-[#FF2E63]/60 p-2 cursor-pointer  rounded-xl flex   lg:text-base  font-semibold hover:bg-[#747264]/70 transition-all duration-200'}>
      <motion.div className=' font-sans '  layout transition={spring} >{item.title}</motion.div> </Link>
      )}
      <Link className=' bg-red-600 mx-auto gap-4 rounded-lg text-xs font-medium  my-4  px-5 py-2' to ="/login">Login</Link>
       
       </div> 
    </div>

    </>}
    <Outlet/>
    </>

 
  )
}

export default Header