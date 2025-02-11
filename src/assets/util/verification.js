import axios from "axios";
export const verify=async()=>{
 try {
    const data=await axios.get("https://portfolio-20-server.vercel.app/verify",{withCredentials:true} );
   return data?.data?.success;
 } catch (error) {
   console.log(error)
    return false;
   
 }
}