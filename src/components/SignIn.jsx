import React from 'react'
import heroImg5 from '../assets/heroImg5.jpeg'
import logo from "../assets/watchroom-first.png";
import { Link } from "react-router-dom";




const SignIn = () => {

    const sideImage1 = {
      backgroundImage: `url(${heroImg5})`,
      backgroundSize: 'cover',
      backgroundRepeat: "no-repeat",
      backgroundPosition: 'center',
    }


  return (
<div className='w-full h-screen flex'>
  <div style={sideImage1} className='w-[50%] h-full bg-red-500 hidden lg:flex'></div>
  
  <div className='w-full lg:w-[50%] flex flex-col items-center justify-center relative px-5'>

    <Link to="/" >
      <img src={logo} alt="" className='w-20 absolute top-4 right-4'/>
    </Link>

    <div className='flex flex-col items-center mb-12 gap-3'>
      <h1 className='text-4xl font-semibold text-center'>Welcome Back!</h1>
      <p className='w-full text-center'>Continue your journey into endless entertainment.</p>
    </div>

    <form action="POST" className='flex flex-col gap-5 w-full max-w-sm'>
      <input type="text" placeholder='Email Address' className='w-full rounded-md p-3 border'/>
      <input type="text" placeholder='Password' className='w-full rounded-md p-3 border'/>

      <button 
        className="mt-5 px-4 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer w-full"
      >
        Login
      </button>
    </form>
  </div>
</div>

  )
}

export default SignIn