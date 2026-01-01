import React from 'react';
import useAuth from '../../Hooks/useAuth';

const Title = () => {
  const {user} = useAuth()
  return (
    <div className='py-13 text-center'>
      {
    user ? 
 
    <div>
      <h2 className="text-2xl font-bold">Welcome Back</h2>
       <div className='max-w-[350px] mx-auto text-[#595c59]'>
       <p>Continue organizing your code snippets and explore your saved folders</p>
     </div>
    </div> 
    :
       <div className='space-y-3'>
      <h2 className="text-2xl font-bold text-[#4d4d4d]">Organize and Highlight Your Code</h2>
     <div className='max-w-[350px] mx-auto text-[#595c59]'>
       <p>Sign up to create folders and save your favorite snippets with syntax highlighting for multiple languages and themes.</p>
     </div>
    </div> 
    
      }
    </div>
  );
};

export default Title;