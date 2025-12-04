import React from 'react'
import heroImg5 from '../assets/heroImg5.jpeg'
import logo from '../assets/WATCHROOM.ORG (1).PNG'
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
      
      <div className='w-full lg:w-[50%] flex flex-col items-center justify-center relative'>

        <Link to="/" >
          <img src={logo} alt="" className='w-20 absolute top-8 right-10'/>
        </Link>

        <div className='flex flex-col items-center mb-12 gap-3'>
          <h1 className='text-4xl font-semibold'>Welcome Back!</h1>
          <p className='w-100 text-center'>Continue your journey into endless entertainment.</p>
        </div>

        <form action="POST" className='flex flex-col gap-5'>
          <input type="text" placeholder='Email Address' className='w-100 rounded-md p-3 border border-white'/>
          <input type="text" placeholder='Password' className='w-100 rounded-md p-3 border border-white'/>

          <button 
            className="mt-30 px-4 py-3 bg-blue-600! text-white rounded-md hover:bg-blue-700! cursor-pointer"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignIn