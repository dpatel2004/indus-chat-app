import React from 'react'
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';
import { useState } from 'react';

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

const {loading,loging} = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault();
        await Login(username,password)
    }

  return <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
    {/* <div className='w-full p-6 rounded-lg  bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-600 shadow-md'> */}
    <div className = " px-10 p-10 py-10  h-full w-full bg-white-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-200 border border-gray-100">
    <h1 className='text-3xl font-semibold text-center text-white'> Login
    <span className='text-blue-500'>ChatApp</span>
    </h1>
    <form onSubmit={handleSubmit}>
        <div>
            <label className='label p-2'>
                <span className='text-base label-text text-white' >Username</span>

            </label>
            <input type='text' placeholder='Enter Username' className='w-full input input-bordered h-10'></input>
        </div>

        <div>
        <label className='label '>
                <span className='text-base label-text text-white' >Password</span>

            </label>
            <input type='password' placeholder='Enter Password' className='w-full input input-bordered h-10' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <Link to='/signup' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-white'>
            {"Don't "} have an account?
        </Link>

        <div>
        <button className="btn  btn-block   btn-outline btn-sm mt-2 border border-blue-700 text-white  "  disabled={loading}> {loading ? <span className='loading loading-spinner'></span>: "Login"}</button>        </div>

    </form>
    </div>
  </div>;
  
};

export default Login;
//starter code for this file

// const Login = () => {
//     return <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//       {/* <div className='w-full p-6 rounded-lg  bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-600 shadow-md'> */}
//       <div className = " px-10 p-10 py-10  h-full w-full bg-white-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-200 border border-gray-100">
//       <h1 className='text-3xl font-semibold text-center text-white'> Login
//       <span className='text-white-400'>ChatApp</span>
//       </h1>
//       <form>
//           <div>
//               <label className='label p-2'>
//                   <span className='text-base label-text text-white' >Username</span>
  
//               </label>
//               <input type='text' placeholder='Enter Username' className='w-full input input-bordered h-10'></input>
//           </div>
  
//           <div>
//           <label className='label '>
//                   <span className='text-base label-text text-white' >Password</span>
  
//               </label>
//               <input type='password' placeholder='Enter Password' className='w-full input input-bordered h-10'></input>
//           </div>
  
//           <a href='#' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-white'>
//               {"Don't "} have an account?
//           </a>
  
//           <div>
//               <button className='btn btn-block btn-sm mt-2'>Login</button>
//           </div>
  
//       </form>
//       </div>
//     </div>;
    
//   };
  
//   export default Login;