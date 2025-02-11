import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { MdModeEdit } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import CardProject from './ProjectComponents/CardProject';
import SectionProject from './ProjectComponents/SectionProject';



const Achievment = () => {
    

   const  [achievments,SetAchievments]=useState([
    {name:"Twitter",
    technologies:["HTML", "CSS","REACT","NODE","MONGO","HTML", "CSS","REACT","NODE","MONGO"],
    gitHubLink:"https://github.com/",
    LiveLink:"https://google.com",
    img:"https://marketplace.canva.com/EAFNlUJs5g4/2/0/1600w/canva-white-simple-certificate-of-appreciation-Fcz7KkZ5YaU.jpg",
    description:"This is achievmment text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishi"
    
   },
   {name:"Portfolio",
    technologies:["CSS","HTML", "CSS","REACT","NODE","MONGO","HTML", "CSS","REACT","NODE","MONGO"],
    gitHubLink:"https://github.com/",
    LiveLink:"https://google.com",
    img:"https://marketplace.canva.com/EAFNlUJs5g4/2/0/1600w/canva-white-simple-certificate-of-appreciation-Fcz7KkZ5YaU.jpg",
    description:"This is achievmment text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishi"
    
   },
   {name:"GharPerfect",
   technologies:["NODE","CSS","HTML", "CSS","REACT","NODE","MONGO","HTML", "CSS","REACT",,"MONGO"],
   gitHubLink:"https://github.com/",
   LiveLink:"https://google.com",
   img:"https://marketplace.canva.com/EAFNlUJs5g4/2/0/1600w/canva-white-simple-certificate-of-appreciation-Fcz7KkZ5YaU.jpg",
   description:"This is achievmment text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishi"
   
  },
  {name:"Twitter",
  technologies:["HTML", "CSS","REACT","NODE","MONGO","HTML", "CSS","REACT","NODE","MONGO"],
  gitHubLink:"https://github.com/",
  LiveLink:"https://google.com",
  img:"https://marketplace.canva.com/EAFNlUJs5g4/2/0/1600w/canva-white-simple-certificate-of-appreciation-Fcz7KkZ5YaU.jpg",
  description:"This is achievmment text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishi"
  
 },
 {name:"Portfolio",
  technologies:["CSS","HTML", "CSS","REACT","NODE","MONGO","HTML", "CSS","REACT","NODE","MONGO"],
  gitHubLink:"https://github.com/",
  LiveLink:"https://google.com",
  img:"https://marketplace.canva.com/EAFNlUJs5g4/2/0/1600w/canva-white-simple-certificate-of-appreciation-Fcz7KkZ5YaU.jpg",
  description:"This is achievmment text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishi"
  
 },
 {name:"GharPerfect",
 technologies:["NODE","CSS","HTML", "CSS","REACT","NODE","MONGO","HTML", "CSS","REACT",,"MONGO"],
 gitHubLink:"https://github.com/",
 LiveLink:"https://google.com",
 img:"https://marketplace.canva.com/EAFNlUJs5g4/2/0/1600w/canva-white-simple-certificate-of-appreciation-Fcz7KkZ5YaU.jpg",
 description:"This is achievmment text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishi"
}
   ]);
   
   const [active,setActive]=useState(0);
  
  
 
  return (
    <div className=' py-4 text-black  h-full  '>
      <div className=' rounded-md flex md:flex-row flex-col gap-2 h-full  ring-1 p-1 ring-black  '> 
      <section className=' w-full md:w-1/3 flex-col gap-4 items-center h-full  ring-1 ring-inset  ring-white rounded-lg p-2 '>
      {/* card */}
        <div className=' flex w-full snap-x md:snap-y md:flex-col  gap-4 overflow-x-auto md:overflow-y-auto  max-h-[520px] '>
         { achievments.map((item,index)=><CardProject func={(index)=>setActive(index)} index={index} key={index} value={item}/>)}
        </div>
        
      </section>
      <section className=' w-full md:w-2/3 rounded-md flex flex-col justify-center  '>
      {achievments.map((achievment,index)=> index== active&&<SectionProject key={index} achievment={achievment}/>)}
    
    </section>
      </div>
 </div> 
  )
}

export default Achievment;