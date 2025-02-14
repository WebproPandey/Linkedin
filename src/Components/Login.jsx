import React from 'react'
import Linkedin  from '../assets/images/linkedin.png'
import loginimage  from '../assets/images/login-hero.svg'

const Login = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
    <div className="w-[80%] flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
      
      <div className="p-10 md:w-1/2 flex flex-col justify-center">
        <div className="text-3xl font-bold text-[#0A66C2] mb-6 flex">
          Linked<span className=""><img src={Linkedin} alt="" /></span>
        </div>

        <h2 className="text-4xl font-semibold text-gray-700 mb-4">
          Welcome to your professional community
        </h2>

        <button className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
          <div className='flex items-center justify-center bg-white rounded-full w-8 h-8 '>
          <img
            src="https://imgs.search.brave.com/lQT2owEfy2yxCwUUF4C1iQwnxUJrHenpx89hdzB1k-Y/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9yZWdp/c3RyeS5ucG1taXJy/b3IuY29tL0Bsb2Jl/aHViL2ljb25zLXN0/YXRpYy1wbmcvbGF0/ZXN0L2ZpbGVzL2Rh/cmsvZ29vZ2xlLWNv/bG9yLnBuZw"
            alt="Google"
            className="w-5 h-5"
          />
          </div>
          <span>Continue with Google</span>
        </button>

        <button className="w-full flex items-center justify-center space-x-2 bg-gray-200 text-gray-700 py-2 mt-3 rounded-md hover:bg-gray-300 transition">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
            alt="Microsoft"
            className="w-5 h-5"
          />
          <span>Continue with Microsoft</span>
        </button>

        <button className="w-full flex items-center justify-center space-x-2 border border-gray-400 py-2 mt-3 rounded-md hover:bg-gray-200 transition">
          <span>Sign in with email</span>
        </button>

        {/* Terms & Conditions */}
        <p className="text-xs text-gray-500 mt-4">
          By clicking Continue to join or sign in, you agree to LinkedIn’s{" "}
          <span className="text-blue-600 cursor-pointer">User Agreement</span>,{" "}
          <span className="text-blue-600 cursor-pointer">Privacy Policy</span>, and{" "}
          <span className="text-blue-600 cursor-pointer">Cookie Policy</span>.
        </p>

        {/* New User? */}
        <p className="text-sm text-gray-700 mt-4">
          New to LinkedIn? <span className="text-blue-600 cursor-pointer">Join now</span>
        </p>
      </div>

      <div className="md:w-1/2 hidden md:block ">
        <img
          src={loginimage}
          alt="LinkedIn Banner"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
  )
}

export default Login