import React from "react";
import profileimage from '../assets/images/profileimage.jpg'

const Header = () => {
  return (
    <>
      {/* Header */}
      <header className="bg-white shadow-md p-3 fixed w-full top-0 z-[999]">
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
          <div className="md:flex flex-grow mx-4 ">
            <input
              type="text"
              placeholder="Search"
              className="w-full md:w-1/2 p-2 px-4 border bg-[#EDF3F8] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Navigation Icons - Hidden on Small Screens */}
          <nav className="md:flex space-x-8 hidden text-gray-600">
            <div className="flex flex-col leading-7 items-center cursor-pointer text-[#888] hover:text-[#191919]">
              <i className="ri-home-5-fill  text-[1.5rem]"></i>
              <span className="text-[.8rem]">Home</span>
            </div>
            <div className="flex flex-col leading-7 items-center cursor-pointer text-[#888] hover:text-[#191919]">
              <i className="ri-group-fill text-[1.5rem]"></i>
              <span className="text-[.8rem]">My Network</span>
            </div>
            <div className="flex flex-col leading-7 items-center cursor-pointer text-[#888] hover:text-[#191919]">
              <i className="ri-briefcase-fill text-[1.5rem]"></i>
              <span className="text-[.8rem]">Jobs</span>
            </div>
            <div className="flex flex-col leading-7 items-center cursor-pointer text-[#888] hover:text-[#191919]">
              <i className="ri-message-2-fill text-[1.5rem]"></i>
              <span className="text-[.8rem]">Messaging</span>
            </div>
            <div className="flex flex-col leading-7 items-center cursor-pointer text-[#888] hover:text-[#191919]">
              <i className="ri-notification-2-fill text-[1.5rem]"></i>
              <span className="text-[.8rem]">Notifications</span>
            </div>
          </nav>

          {/* User Profile */}
          <div className="ml-4 leading-4 flex flex-col items-center cursor-pointer">
            <img
              src={profileimage}
              alt="Profile"
              className="w-8 h-8 rounded-full border-2"
            />
            <span className="text-[.8rem] text-[#888]">Me</span>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navbar */}
      <nav className="fixed bottom-0 w-full bg-white shadow-md md:hidden flex justify-around py-2 border-t">
        <div className="flex flex-col items-center text-gray-600 hover:text-black cursor-pointer">
          <i className="ri-home-5-fill text-2xl"></i>
          <span className="text-xs">Home</span>
        </div>
        <div className="flex flex-col items-center text-gray-600 hover:text-black cursor-pointer">
          <i className="ri-group-fill text-2xl"></i>
          <span className="text-xs">Network</span>
        </div>
        <div className="flex flex-col items-center text-gray-600 hover:text-black cursor-pointer">
          <i className="ri-briefcase-fill text-2xl"></i>
          <span className="text-xs">Jobs</span>
        </div>
        <div className="flex flex-col items-center text-gray-600 hover:text-black cursor-pointer">
          <i className="ri-message-2-fill text-2xl"></i>
          <span className="text-xs">Messages</span>
        </div>
        <div className="flex flex-col items-center text-gray-600 hover:text-black cursor-pointer">
          <i className="ri-notification-2-fill text-2xl"></i>
          <span className="text-xs">Alerts</span>
        </div>
      </nav>
    </>
  );
};

export default Header;
