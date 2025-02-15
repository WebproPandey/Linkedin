import React from 'react'
import profileimage from '../assets/images/profileimage.jpg'
import cardbg from '../assets/images/card-bg.svg'
import item from '../assets/images/item-icon.svg'
import user from '../assets/images/user.svg'


const Home = () => {
  return (
    <>
    <div className="bg-[#F4F2EE] min-h-screen flex    justify-center pt-[5rem] ">
    <div className="max-w-6xl w-full flex md:flex-row flex-col gap-6 p-4">
      
      {/* Left Sidebar (Profile) */}
      <div className=" w-full md:w-1/4 bg-white p-4 rounded-lg shadow-md relative overflow-hidden">
      <div className='w-full h-[10vh] absolute top-0 left-0  z-10'>
        <img src={cardbg} className='h-full w-full object-cover' alt="" />
      </div>
        <img
          src={profileimage}
          alt="Profile"
          className="w-20 h-20 mx-auto rounded-full border-4 z-[99] relative"
        />
        <h2 className="text-center text-lg font-semibold mt-2 z-20">Amit Pandey</h2>
        <p className="text-center text-sm text-gray-600 z-10">
          Frontend Developer | React | Tailwind <br />
          GSAP|scrolltriger |Locomotive|lenis | <br />
          swiper.js | Javascript, React js
        </p>
        <div className="mt-4 border-t pt-3">
          <div className="text-sm text-gray-600 flex justify-between hover:bg-[#F4F2EE] px-2">
            Profile viewers <span className="text-blue-500">32</span>
          </div>
          <div className="text-sm text-gray-600 flex justify-between hover:bg-[#F4F2EE] px-2">
            Post impressions <span className="text-blue-500">12</span>
          </div>
        </div>
        <div className="mt-4 text-sm border-t py-4 px-2 hover:bg-[#F4F2EE]">
            <p>Access  exclisive tools & insights</p>
            <div className='flex items-center gap-2'> 
            <i className="ri-bank-card-fill text-xl bg-gradient-to-r from-[#C37D16] to-[#E7A33E] bg-clip-text text-transparent"></i>
            Try 1 month for ₹0</div>
        </div>
        <div className="text-sm mt-4 border-t py-4  px-2 hover:bg-[#F4F2EE]">
            <div className='flex'> <img src={item} alt="" /> 
            Saved items
            </div>
        </div>
      </div>

      {/* Main Feed */}
      <div className="w-full md:w-1/2">
        <div className="bg-white p-4 rounded-lg shadow-md ">
         <div className='flex justify-center items-center gap-2'>
         <div className='w-14 h-12'>
         <img
          src={profileimage}
          alt="Profile"
          className="w-full h-full mx-auto rounded-full border-4 "
        />
         </div>
         <input
            type="text"
            placeholder="Start a post..."
            className="w-full border p-2 rounded-2xl"
          />
         </div>
          <div className="flex justify-between mt-2">
            <button className="flex  items-center font-medium text-[#2c2c2c]">
              <i className="ri-image-fill text-[#0A66C2] text-[1.5rem]  "></i>   Photo
            </button>
            <button className="flex items-center text-[#2c2c2c] ">
            <i className="ri-movie-fill text-[#5F9B41] text-[1.5rem]"></i> Video
            </button>
            <button className="flex items-center   text-[#2c2c2c]">
            <i className="ri-book-open-fill text-[#E06847] text-[1.5rem]"></i> Write Article
            </button>
          </div>
        </div>

        {/* Sample Post */}
        <div className="bg-white p-4 mt-4 rounded-lg shadow-md">
          <div className="flex items-center">
            <img
              src={user}
              alt="User"
              className="w-10 h-10 rounded-full"
            />
            <div className="ml-3">
              <h3 className="text-sm font-semibold">Bhavna Naliyadhara</h3>
              <p className="text-xs text-gray-500">Frontend Developer | WordPress</p>
            </div>
          </div>
          <p className="mt-2 text-gray-700">
            🚀 Join our growing tech team!
          </p>
          <div className='flex justify-between px-2 py-1'>
            <div className="flex">
                <h1>👍</h1>
                <h1>👏58</h1>
            </div>
            <p>5comments</p>
          </div>
          <div className="flex justify-between mt-2 text-gray-500">
            <button className="hover:bg-[#f4f2ee] px-4 py-2">
            <i className="ri-thumb-up-line"></i>
                Like</button>
            <button className="hover:bg-[#f4f2ee] px-4 py-2">
            <i className="ri-message-2-line"></i>
                Comment</button>
            <button className="hover:bg-[#f4f2ee] px-4 py-2">
            <i className="ri-share-forward-line"></i>
                Share</button>
            <button className="hover:bg-[#f4f2ee] px-4 py-2">
            <i className="ri-send-plane-line"></i>
                Send</button>
          </div>
        </div>
      </div>

      {/* Right Sidebar (Trending) */}
      <div className="w-full  md:w-1/4 bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold">Trending Now</h3>
        <ul className="mt-2 text-sm text-gray-700">
          <li className="py-2 border-b">🔥 Honda, Nissan scrap merger</li>
          <li className="py-2 border-b">💰 Luxury brands bet big in India</li>
          <li className="py-2 border-b">🏥 Health cover remains stable</li>
          <li className="py-2 border-b">📉 RBI steps up forex reserves</li>
        </ul>
      </div>
    </div>
  </div>
  </>

  )
}

export default Home