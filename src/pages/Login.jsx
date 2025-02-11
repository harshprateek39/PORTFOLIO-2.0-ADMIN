
import { useEffect, useState } from "react";
import { Link,useNavigate} from "react-router-dom";
import gothic from  '../assets/gothic.jpg';
import { useDispatch ,useSelector} from 'react-redux';
import axios from 'axios';
import { verify } from "../assets/util/verification";
import { loginStatus } from "../store/slices/loginSlice";
const Login = () => { 

   console.log("ddddddd",process.env.REACT_APP_SERVER_PORT);
  
 const navigate=useNavigate();
 const verification=async()=>{
  const res=await verify()
  
  if(res){
navigate('/');
  }
}
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
const dispatch =useDispatch();
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      
      const res= await axios.post(`${process.env.REACT_APP_SERVER_PORT}/auth/login`,{email:formData.email,password:formData.password}, { withCredentials: true });
      console.log(res.data);
      navigate("/");
      dispatch(loginStatus(true));


    } catch (error) {
       console.log(error)
    }
     
  };
  const [index,setIndex]=useState(0);
    const bulb=[ 0,1,2];
     const fnc=()=>{{
      setTimeout(()=>{
        if(index==2){
          setIndex(0);}
          else
          {setIndex(index+1)}
        
      },500)
     }}
     useEffect(()=>{
      verification()
},[]);
    useEffect(()=>{
    fnc();
    
    },[index])
  return (
    <div className=" text-[#EAEAEA] grow  loginbg   ">   
      
      <div className=" mt-4 px-2 sm:px-5  lg:px-24  ">
        <div className="   pt-6 flex flex-col items-center rounded-3xl gap-8  ">
          <h1 className="md:text-3xl font-semibold text-white" >Welcome To Your Portfolio Admin</h1>
        
          {/* form */}
      <form onSubmit={handleSubmit} className=" bg-[#252A34]/20 backdrop-blur-md  p-10 rounded-lg  flex flex-col items-center gap-3">
      <div className=" flex flex-col">
        <label className="text-sm" htmlFor="email">Email</label>
        <div className=" bg-gradient-to-b from-[#FFFFFF1C] to-[#444242] gap-4 flex items-center p-2   shadow-inner rounded-lg ">
       
        <input className=" outline-none bg-transparent placeholder:text-xs "
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email address"
          value={formData.email}
          onChange={handleChange}
          required
        /></div> 
      </div>
      <div className=" flex flex-col ">
      <label className="text-sm" htmlFor="password">Password</label>
        <div className="  bg-gradient-to-b from-[#FFFFFF1C] to-[#444242] gap-4 flex items-center p-2   shadow-inner rounded-lg ">
   
        <input className=" bg-transparent placeholder:text-xs outline-none border-none focus:outline-none "
          type="password"
          id="password"
          name="password"
          placeholder="Enter your Password"
          value={formData.password}
          onChange={handleChange}
          required
        /></div>
      </div>
      <div className=" my-3  w-full">
        <button className=" bg-pink-500 w-full  py-2 rounded-lg  " type="submit">Login</button>
       
      </div>
      <Link href={"/forgot"}><h1 className=" text-xs text-center font-semibold">Forgot Password?</h1></Link>
    </form>
    <div className=" h-2 w-1/3 grid grid-cols-3 gap-3">
        {bulb.map((item,ind)=><div key={ind}  id="1" className={ item!==index? "  bg-white/50 rounded-3xl":"bg- bg-white rounded-3xl"}></div>)}
          
         
          
        </div>
        </div>
      </div>
    </div>
  )
}

export default Login