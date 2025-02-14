import React from "react";
import profileimage from '../assets/images/profileimage.jpg'

const Header = () => {
  return (
    <header className="bg-white shadow-md p-3 fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
            alt="LinkedIn Logo"
            className="w-10"
          />
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-grow mx-4">
          <input
            type="text"
            placeholder="Search"
            className="w-1/2 p-2 px-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Navigation Icons */}
        <nav className="flex space-x-6 text-gray-600 ">
          <div className="flex flex-col leading-5 items-center cursor-pointer text-[#888] hover:text-[#191919]">
          <i className="ri-home-5-fill  text-[1.5rem]"></i>
            <span className="">Home</span>
          </div>
          <div className="flex flex-col leading-5 items-center cursor-pointer text-[#888] hover:text-[#191919]">
           <i className="ri-group-fill text-[1.5rem]"></i>
            <span className="">My Network</span>
          </div>
          <div className="flex flex-col leading-5 items-center cursor-pointer text-[#888] hover:text-[#191919]">
          <i className="ri-briefcase-fill text-[1.5rem]"></i>
            <span className="">Jobs</span>
          </div>
          <div className="flex flex-col leading-5 items-center cursor-pointer text-[#888] hover:text-[#191919]">
          <i className="ri-message-2-fill text-[1.5rem]"></i>
            <span className="">Messaging</span>
          </div>
          <div className="flex flex-col leading-5 items-center cursor-pointer text-[#888] hover:text-[#191919]">
          <i className="ri-notification-2-fill text-[1.5rem]"></i>
            <span className="">Notifications</span>
          </div>
        </nav>

        {/* User Profile */}
        <div className="ml-4">
          <img
            src={profileimage}
            alt="Profile"
            className="w-8 h-8 rounded-full border-2 "
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
