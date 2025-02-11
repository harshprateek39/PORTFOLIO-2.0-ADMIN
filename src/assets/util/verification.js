import axios from "axios";
export const verify=async()=>{
 try {
    const data=await axios.get("http://localhost:8000/verify",{withCredentials:true} );
   return data?.data?.success;
 } catch (error) {
    return false;
   
 }
}