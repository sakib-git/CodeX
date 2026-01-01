import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';
import useAuth from '../Hooks/useAuth';
import { signOut } from 'firebase/auth';
import { auth } from '../FireBase/FireBase.init';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const [openProfile, setOpenProfile] =useState(false)
  const { user } = useAuth();
  const handleLogout = () => {
    signOut(auth).then();
  };
  return (
    <div className="mx-2 md:3 pt-3 ">
      <div className="max-w-[1300px] mx-auto bg-white rounded-md flex justify-between items-center px-3 py-4  shadow">
        <Link to="/" className="text-2xl font-bold text-[#262626]">
          CodexSnip
        </Link>

        {user ? (
          <div onClick={() => setOpenProfile(!openProfile)} className="relative">
            {user?.photoURL ? <img src={user.photoURL} alt="User" className="w-8 h-8 rounded-full object-cover" /> : <FaUserCircle size={30} />}

         {
          openProfile &&    <button onClick={handleLogout} className="btn px-9  rounded-md absolute top-14 right-0">
              LogOut
            </button>
         }
          </div>
        ) : (
          <div className="space-x-4">
            <NavLink to="/login" className="underline font-semibold text-sm">
              Login
            </NavLink>
            <NavLink to="/register" className="bg-[#f2f2f2] px-3 py-1 rounded-full font-semibold text-sm shadow">
              Register
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
