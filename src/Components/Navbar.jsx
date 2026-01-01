import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
  return (
    <div className='mx-2 md:3 pt-3 '>
      <div className='max-w-[1300px] mx-auto bg-white rounded-md flex justify-between items-center px-3 py-4  shadow'>
        <Link to='/' className='text-2xl font-bold text-[#262626]'>CodexSnip</Link>

        <div className='space-x-4'>
          <NavLink to='/login' className='underline font-semibold text-sm'>Login</NavLink>
          <NavLink to='/register' className='bg-[#f2f2f2] px-3 py-1 rounded-full font-semibold text-sm shadow'>Register</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;