import React from 'react';
import Login from '../pages/Login/Login';
import { Link, Outlet } from 'react-router';

const AuthLayout = () => {
  return (
    <div className=" bg-[#f2f2f2] h-screen ">
      <div className='p-4'>
        <Link to="/" className="text-2xl font-bold text-[#262626]">
          CodexSnip
        </Link>

        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default AuthLayout;
