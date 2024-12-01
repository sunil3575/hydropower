import React from 'react';
import { BrowserRouter, Outlet, Router } from 'react-router-dom';
import NavigationBar from '../Components/NavigationBar';
import Footer from './Footer';
import Calendar from 'react-calendar';
import App from '../App';


const Layout = () => {
  return (
   
    <>
      
       
       

        
       <NavigationBar/>
           <Outlet/>  
           <Footer/>
          
          
           </>
         
  
  )
}

export default Layout;
