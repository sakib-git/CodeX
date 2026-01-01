import React, { useState } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { RiEyeCloseLine } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import useAuth from './../../Hooks/useAuth';
import { toast } from 'kitzo';

const Login = () => {
  const { loginUser, GoogleLogin } = useAuth();
  const [showPass, setShowPass] = useState(true);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    loginUser(data.email, data.password)
      .then(() => {
        navigate('/');
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const handlegoogle = () => {
    GoogleLogin().then(() => {
      navigate('/');
    });
  };
  return (
    <div className="mx-2 ">
      <div className="flex justify-center items-center mt-50">
        <form onSubmit={handleSubmit(handleLogin)} className="max-w-[400px] w-full flex flex-col gap-3 ">
          <h3 className="text-3xl font-bold mb-3 text-center">Welcome back!</h3>
          <div className="flex flex-col gap-1.5">
            <label className="text-gray-600 font-light" htmlFor="email">
              Email
            </label>
            <input type="email" {...register('email', { required: true })} id="email" className="border border-[#c9c9c9] px-3 py-2 focus:outline-none focus:border-[#c9c9c9] focus:ring-2 focus:ring-[#c9c9c9] transition rounded-full " placeholder="Your Email" />
            {errors.email?.type === 'required' && <p className="text-sm text-red-500">email is required</p>}
          </div>

          <div className="flex flex-col gap-1.5 relative">
            <label className="text-gray-600 font-light" htmlFor="password">
              Password
            </label>
            <input type={showPass ? 'password' : 'text'} id="password" {...register('password', { required: true, minLength: 6 })} className="border border-[#c9c9c9] px-3 py-2 focus:outline-none focus:border-[#c9c9c9] focus:ring-2 focus:ring-[#c9c9c9] transition rounded-full " placeholder="Your Password" />
            {errors.password?.type === 'required' && <p className="text-sm text-red-500">Password is required</p>}
            {errors.password?.type === 'minLength' && <p className="text-sm text-red-600">password must be 6 characters or longer</p>}
            <span className="absolute right-1 top-8.5 bg-[#e6e6e6] rounded-full p-[8px]" onClick={() => setShowPass(!showPass)}>
              {showPass ? <RiEyeCloseLine size={18} /> : <AiOutlineEye size={18} />}
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <button className="bg-[#1a1a1a] px-2 py-2 rounded-full text-white font-semibold ">Login</button>
            <p className="text-center">or</p>
            <button type="button" onClick={handlegoogle} className="btn bg-[#1a1a1a] text-white font-semibold rounded-full  py-3 border-[#e5e5e5]">
              <svg className="bg-black" aria-label="Google logo" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <g>
                  <path d="m0 0H512V512H0" fill="#000"></path>
                  <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                  <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                  <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                  <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
                </g>
              </svg>
              Login with Google
            </button>
            <p className="text-center">
              Don't have an account?
              <Link to="/register" className="text-blue-500">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
