import React from 'react';
import Title from '../Title/Title';
import { FaArrowRightToBracket } from 'react-icons/fa6';
import { Link } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import { FaPlus } from 'react-icons/fa';

const Home = () => {
  const {user} = useAuth()
  return (
  <div className='mx-2 md:mx-3'>
      <div className='max-w-[1300px] mx-auto'>
    <Title></Title>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
 {
  user ? 
        <div  className='max-w-[350px] h-[200px] grid place-content-center bg-white rounded-2xl text-[#999999] hover:text-[#666666]   border-3 border-transparent  hover:border-[#cccccc] hover:border-3  transition-border duration-300'>
       <span className=' mx-auto'><FaPlus size={32} /></span>
        <h3 className="text-[18px] font-semibold">Add Code Folder</h3>

      </div>
  :
       <Link to='/login' className='max-w-[350px] h-[200px] grid place-content-center bg-white rounded-2xl text-[#999999] hover:text-[#666666]   border-3 border-transparent  hover:border-[#cccccc] hover:border-3  transition-border duration-300'>
       <span className=' mx-auto'><FaArrowRightToBracket size={32} /></span>
        <h3 className="text-[18px] font-semibold">Log in</h3>

      </Link>
 }
    </div>
    </div>
  </div>
  );
};

export default Home;