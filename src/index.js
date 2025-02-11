import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter,
  useNavigate,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import TopmostPage from './pages/TopmostPage';
import Heading from './components/HomePage/Heading';
import Heading2 from './components/AboutPage/Heading2';
import Login from './pages/Login'
import Achievment from './components/ProjectPage/Achievments/Achievment';
import Project from './components/ProjectPage/Pojects/Project';
import { Provider } from 'react-redux';
import store from './store/store';
import Contact from './components/ContactPage/Contact';
import { verify } from './assets/util/verification';
import { useDispatch ,useSelector} from 'react-redux';

import { loginSlice, loginStatus } from './store/slices/loginSlice';
import LoadingPage from './pages/LoadingPage.jsx';
const router = createBrowserRouter([ 
  {
    children:[
      {  
        path:"/",
        element:<div className=' bg-[#08D9D6] h-[100vh] md:grid grid-flow-col grid-cols-8 md:p-4 gap-4 flex flex-col py-1  '>
        <Header  /> 
        <TopmostPage key={1}  components={[{title:"Dashboard",element:<Heading/>}]}/></div>,
        
      },
      {
        path:'/about',
        element:<div className=' bg-[#08D9D6] h-[100vh] md:grid grid-flow-col grid-cols-8 md:p-4 gap-4 flex flex-col py-1  '>
        <Header /> 
        <TopmostPage key={2}  components={[{title:"About",element:<Heading2/>}]}/></div>,
      },
      {
        path:'/project',
        element:<div className=' bg-[#08D9D6] h-[100vh] md:grid grid-flow-col grid-cols-8 md:p-4 gap-4 flex flex-col py-1  '>
        <Header  /> 
        <TopmostPage key={3} components={[{title:"Achievment",element:<Achievment/>},{title:"Projects",element:<Project/>}]} /></div>,
      },
      {
        path:'/contact',
        element:<div className=' bg-[#08D9D6] h-[100vh] md:grid grid-flow-col grid-cols-8 md:p-4 gap-4 flex flex-col p-1  '>
        <Header  />
        <TopmostPage key={4} components={[{title:"Contact",element:<Contact/>}]}/></div>,
      },
      {
        path:'/login',
        element:<div className=' min-h-[100vh]  gap-4 flex flex-col   '>
        <Login/>
        </div>,
       
      },
     
      
    ],
  },
]);

const App = () => {
 const loginvalue=useSelector(state=>state.login)
  const [loading,setLoading]=useState(false);
  const [step,setStep]=useState(1);
  const dispatch=useDispatch();
  
  const verifyFn=async()=>{
   const res= await verify();
   if(res){
    setLoading(true);
   }
  }
  useEffect(() => {
    verifyFn();

  }, [loginvalue]); 
  
  return (
    <>
      {loading?<LoadingPage setLoading={setLoading} />:<RouterProvider router={router} />}</>
   
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}><App /> </Provider>);


