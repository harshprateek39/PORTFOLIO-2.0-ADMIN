import React, { useState } from 'react'
import * as XLSX from 'xlsx';
import CardContact from './ContactComponrnt/CardContact';
import SectionContact from './ContactComponrnt/SectionContact';
const Contact = () => {
    const [active,setActive]=useState(0);
    const [current,setCurrent]=useState(false);
    const [details,setDetails]=useState({
        email:"harshprateek39@gmail.com",
        phone:"+91 7631842038",
        linkedin:"linkedin.com",
        github:"github.com",
        instagram:"instagram.com",
        whatsapp:"whatsapp.com",
        twitter:"Twitter.com",
    })
    const data=[
        {name: 'John', email: "john@example.com" ,message:"Hello world from John Doe , Want to Join", date:"2024-03-12"},
        {name: 'Andrew', email: "mohan@example.com" ,message:" lorem Hello world from John Doe , Want to Join lorem Hello world from John Doe , Want to Join lorem Hello world from John Doe , Want to Join lorem Hello world from John Doe , Want to Join lorem Hello world from John Doe , Want to Join lorem Hello world from John Doe , Want to Joinlorem Hello world from John Doe , Want to Joinlorem Hello world from John Doe , Want to Joinlorem Hello world from John Doe , Want to Joinlorem Hello world from John Doe , Want to Joinlorem Hello world from John Doe , Want to Joinlorem Hello world from John Doe , Want to Joinlorem Hello world from John Doe , Want to Joinlorem Hello world from John Doe , Want to Joinlorem Hello world from John Doe , Want to Joinlorem Hello world from John Doe , Want to Joinlorem Hello world from John Doe , Want to Joinlorem Hello world from John Doe , Want to Joinlorem Hello world from John Doe , Want to Joinlorem Hello world from John Doe , Want to Joinlorem Hello world from John Doe , Want to Joinlorem Hello world from John Doe , Want to Joinlorem Hello world from John Doe , Want to Joinlorem Hello world from John Doe , Want to Joinlorem Hello world from John Doe , Want to Join", date:"2024-03-12"},
        {name: 'Walker ', email: "perf@example.com" ,message:" Good lorem Hello world from John Doe , Want to Join", date:"2024-03-12"},
        {name: 'John', email: "john@example.com" ,message:"Hello world from John Doe , Want to Join", date:"2024-03-12"},
        {name: 'Andrew', email: "mohan@example.com" ,message:" lorem Hello world from John Doe , Want to Join", date:"2024-03-12"},
        {name: 'Walker ', email: "perf@example.com" ,message:" Good lorem Hello world from John Doe , Want to Join", date:"2024-03-12"},
        
       ]
    const exportToExcel = (jsonData,fileName) => {

        const worksheet = XLSX.utils.json_to_sheet(jsonData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
        XLSX.writeFile(workbook, `${fileName}.xlsx`);
      };
    
  return (
       <div className='rounded-md flex lg:flex-row flex-col gap-2  w-full   my-4    ring-1 p-1 ring-black '>
        <section className=' w-full lg:w-4/12 flex-col gap-4 items-center h-full  ring-1 ring-inset  ring-white rounded-lg p-2 '>
            <div className=' flex w-full snap-x md:snap-y md:flex-col  gap-4 overflow-x-auto md:overflow-y-auto  max-h-[500px] '>
         { data.map((item,index)=><CardContact func={(index)=>setActive(index)} index={index} key={index} value={item}/>)}
        </div>
        <div className=' flex w-full my-1'>
            <button onClick={()=>exportToExcel(data,"mails")} className=' text-sm bg-yellow-500 rounded-md p-1 w-full font-semibold text-nowrap text-white '>EXPORT EXCEL</button>
            
        </div>
        </section>
           <section className=' md:w-5/6 flex flex-col  w-full '>
           {data.map((achievment,index)=> index==active&&<SectionContact key={index} achievment={data[active]}/>)}
           </section>
           <section className=' text-white md:w-3/6 w-full   max-h-[540px]  scroll-smooth snap-y   overflow-y-auto bg-white/10 rounded-md grid grid-flow-col grid-rows-2 md:flex md:flex-col gap-2 md:p-2 p-1 '>
            <div  className='flex bg-white/5 rounded-md p-1 snap-start  flex-col gap-1'>
                <h1 className=' font-semibold'>Email:</h1>
                {current!="email"?<>
                <h2  className=' bg-white/10 rounded-md px-1' > {details.email}</h2>
                <button onClick={()=>setCurrent("email")}   className=' w-full bg-blue-500 rounded-md  font-semibold'>EDIT</button></>:
                <><input className='bg-white/10 rounded-md px-1  ring-1 ring-white ' name='email'  type='text' value={details.email} onChange={(e)=>setDetails(prev=>{return {...prev, [e.target.name]:e.target.value}})} />
                <button onClick={()=>setCurrent(false)}   className=' w-full bg-green-500 rounded-md  font-semibold'>DONE</button></>
                }
            </div>
            <div  className='flex bg-white/5 rounded-md p-1  snap-start flex-col gap-1'>
                <h1 className=' font-semibold'>Phone:</h1>
                {current!="phone"?<>
                <h2  className=' bg-white/10 rounded-md px-1' > {details.phone}</h2>
                <button onClick={()=>setCurrent("phone")}   className=' w-full bg-blue-500 rounded-md  font-semibold'>EDIT</button></>:
                <><input className='bg-white/10 rounded-md px-1  ring-1 ring-white ' name='phone'  type='text' value={details.phone} onChange={(e)=>setDetails(prev=>{return {...prev, [e.target.name]:e.target.value}})} />
                <button onClick={()=>setCurrent(false)}   className=' w-full bg-green-500 rounded-md  font-semibold'>DONE</button></>
                }
            </div>
            <div  className='flex bg-white/5 rounded-md p-1 snap-start  flex-col gap-1'>
                <h1 className=' font-semibold'>Linkedin:</h1>
                {current!="linkedin"?<>
                <h2  className=' bg-white/10 rounded-md px-1' > {details.linkedin}</h2>
                <button onClick={()=>setCurrent("linkedin")}   className=' w-full bg-blue-500 rounded-md  font-semibold'>EDIT</button></>:
                <><input className='bg-white/10 rounded-md px-1  ring-1 ring-white ' name='linkedin'  type='text' value={details.linkedin} onChange={(e)=>setDetails(prev=>{return {...prev, [e.target.name]:e.target.value}})} />
                <button onClick={()=>setCurrent(false)}   className=' w-full bg-green-500 rounded-md  font-semibold'>DONE</button></>
                }
            </div>
            <div  className='flex bg-white/5 rounded-md p-1 snap-start  flex-col gap-1'>
                <h1 className=' font-semibold'>Github:</h1>
                {current!="github"?<>
                <h2  className=' bg-white/10 rounded-md px-1' > {details.github}</h2>
                <button onClick={()=>setCurrent("github")}   className=' w-full bg-blue-500 rounded-md  font-semibold'>EDIT</button></>:
                <><input className='bg-white/10 rounded-md px-1  ring-1 ring-white ' name='github'  type='text' value={details.github} onChange={(e)=>setDetails(prev=>{return {...prev, [e.target.name]:e.target.value}})} />
                <button onClick={()=>setCurrent(false)}   className=' w-full bg-green-500 rounded-md  font-semibold'>DONE</button></>
                }
            </div>
            <div  className='flex bg-white/5 rounded-md p-1  snap-start flex-col gap-1'>
                <h1 className=' font-semibold'>Instagram:</h1>
                {current!="instagram"?<>
                <h2  className=' bg-white/10 rounded-md px-1' > {details.instagram}</h2>
                <button onClick={()=>setCurrent("instagram")}   className=' w-full bg-blue-500 rounded-md  font-semibold'>EDIT</button></>:
                <><input className='bg-white/10 rounded-md px-1  ring-1 ring-white ' name='instagram'  type='text' value={details.instagram} onChange={(e)=>setDetails(prev=>{return {...prev, [e.target.name]:e.target.value}})} />
                <button onClick={()=>setCurrent(false)}   className=' w-full bg-green-500 rounded-md  font-semibold'>DONE</button></>
                }
            </div>
            <div  className='flex bg-white/5 rounded-md p-1  snap-start flex-col gap-1'>
                <h1 className=' font-semibold'>Whatsapp:</h1>
                {current!="whatsapp"?<>
                <h2  className=' bg-white/10 rounded-md px-1' > {details.whatsapp}</h2>
                <button onClick={()=>setCurrent("whatsapp")}   className=' w-full bg-blue-500 rounded-md  font-semibold'>EDIT</button></>:
                <><input className='bg-white/10 rounded-md px-1  ring-1 ring-white ' name='whatsapp'  type='text' value={details.whatsapp} onChange={(e)=>setDetails(prev=>{return {...prev, [e.target.name]:e.target.value}})} />
                <button onClick={()=>setCurrent(false)}   className=' w-full bg-green-500 rounded-md  font-semibold'>DONE</button></>
                }
            </div>
            <div  className='flex bg-white/5 rounded-md p-1 snap-start  flex-col gap-1'>
                <h1 className=' font-semibold'>Twitter:</h1>
                {current!="twitter"?<>
                <h2  className=' bg-white/10 rounded-md px-1' > {details.twitter}</h2>
                <button onClick={()=>setCurrent("twitter")}   className=' w-full bg-blue-500 rounded-md  font-semibold'>EDIT</button></>:
                <><input className='bg-white/10 rounded-md px-1  ring-1 ring-white ' name='twitter'  type='text' value={details.twitter} onChange={(e)=>setDetails(prev=>{return {...prev, [e.target.name]:e.target.value}})} />
                <button onClick={()=>setCurrent(false)}   className=' w-full bg-green-500 rounded-md  font-semibold'>DONE</button></>
                }
            </div>
          
           </section>
    
       </div>
  )
}

export default Contact