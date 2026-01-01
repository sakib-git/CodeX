import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import useAuth from '../Hooks/useAuth';
import { signOut } from 'firebase/auth';
import { auth } from '../FireBase/FireBase.init';
import { FaUserCircle } from 'react-icons/fa';
import { toast } from 'kitzo';

const Navbar = () => {
  const [openProfile, setOpenProfile] = useState(false);
  const { user } = useAuth();
  const handleLogout = () => {
    signOut(auth).then(() => {
      toast.success('Logout successful')
    });
  };
 

  useEffect(() => {
    function closeMenu(e) {
      if (e.target.closest('.dropdown-menu')) return;
      if (e.target.closest('.dropdown-open-btn')) return;
      setOpenProfile(false);
    }
    document.addEventListener('click', closeMenu);

    return () => {
      document.removeEventListener('click', closeMenu);
    };
  }, []);

  return (
    <div className="mx-2 md:3 pt-3 ">
      <div className=" f max-w-[1300px] mx-auto bg-white rounded-md flex justify-between items-center px-3 py-4  shadow">
        <Link to="/" className="text-2xl font-bold text-[#262626]">
          CodexSnip
        </Link>

        {user ? (
          <div className="relative ">
            <div onClick={() => setOpenProfile(!openProfile)} className="dropdown-open-btn cursor-pointer">
              {user?.photoURL ? <img src={user.photoURL} alt="User" className="w-8 h-8 rounded-full object-cover" /> : <FaUserCircle size={30} />}
            </div>

            {openProfile && (
              <button onClick={handleLogout} className=" dropdown-menu  btn px-9  rounded-md absolute top-14 right-0 transition-all duration-300 ease-out ">
                LogOut
              </button>
            )}
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
