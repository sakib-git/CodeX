import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import { ToastContainer } from 'kitzo';


const RootLayout = () => {

  return (
     <div className='bg-[#f2f2f2] h-screen'>
      <Navbar></Navbar>
    <Outlet></Outlet>
   < ToastContainer position='top-right'></ToastContainer>
    </div>
 
 
  );
};

export default RootLayout;