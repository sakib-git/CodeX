import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';

const RootLayout = () => {
  return (
    <div className='bg-[#f2f2f2] h-screen'>
      <Navbar></Navbar>
    <Outlet></Outlet>
    </div>
  );
};

export default RootLayout;