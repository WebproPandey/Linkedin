import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth, provider, signInWithPopup } from "../firebase";
import { setUserLoginDetails } from "../Store/reducers/UserSlice";
import { useNavigate } from "react-router-dom";  // ✅ Import useNavigate
import Linkedin from "../assets/images/linkedin.png";
import loginimage from "../assets/images/login-hero.svg";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user); 
  



  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      if (result.user) {
        dispatch(
          setUserLoginDetails({
            name: result.user.displayName || "",
            email: result.user.email || "",
            photo: result.user.photoURL || "",
          })
        );
        navigate("/home");  
      }
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-[80%] flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-10 md:w-1/2 flex flex-col justify-center">
          <div className="text-3xl font-bold text-[#0A66C2] mb-6 flex">
            Linked<span><img src={Linkedin} alt="" /></span>
          </div>

          <h2 className="text-4xl font-semibold text-gray-700 mb-4">
            Welcome to your professional community
          </h2>

          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            <div className='flex items-center justify-center bg-white rounded-full w-8 h-8'>
              <img
                src="https://imgs.search.brave.com/lQT2owEfy2yxCwUUF4C1iQwnxUJrHenpx89hdzB1k-Y/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9yZWdp/c3RyeS5ucG1taXJy/b3IuY29tL0Bsb2Jl/aHViL2ljb25zLXN0/YXRpYy1wbmcvbGF0/ZXN0L2ZpbGVzL2Rh/cmsvZ29vZ2xlLWNv/bG9yLnBuZw"
                alt="Google"
                className="w-5 h-5"
              />
            </div>
            <span>Continue with Google</span>
          </button>

          <p className="text-xs text-gray-500 mt-4">
            By clicking Continue to join or sign in, you agree to LinkedIn’s{" "}
            <span className="text-blue-600 cursor-pointer">User Agreement</span>,{" "}
            <span className="text-blue-600 cursor-pointer">Privacy Policy</span>, and{" "}
            <span className="text-blue-600 cursor-pointer">Cookie Policy</span>.
          </p>

          <p className="text-sm text-gray-700 mt-4">
            New to LinkedIn? <span className="text-blue-600 cursor-pointer">Join now</span>
          </p>
        </div>

        <div className="md:w-1/2 hidden md:block">
          <img
            src={loginimage}
            alt="LinkedIn Banner"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
