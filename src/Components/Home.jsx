// Inside Home.jsx (make sure to import React, useState, etc.)
import React, { useState } from "react";
import userimg from "../assets/images/user.svg";
import cardbg from "../assets/images/card-bg.svg";
import item from "../assets/images/item-icon.svg";
import { useSelector } from "react-redux";
import PostModal from "../Components/PostModel";

const Home = () => {
  const user = useSelector((state) => state.user);

  // Editable profile info
  const [profileInfo, setProfileInfo] = useState("Add Info");
  const [editing, setEditing] = useState(false);

  // Show/Hide the Post Modal
  const [showModal, setShowModal] = useState(false);

  // Posts array (each post: { authorName, authorPhoto, text, image, video })
  const [posts, setPosts] = useState([]);

  // State to track which post's options dropdown is open (by index)
  const [optionsPostIndex, setOptionsPostIndex] = useState(null);

  // State to track which post is currently being edited
  const [editingPostIndex, setEditingPostIndex] = useState(null);
  const [editedText, setEditedText] = useState("");

  // Callback to add a new post from PostModal
  const handleAddPost = (newPost) => {
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

  // Handlers for editing and deletion
  const handleEditClick = (index, currentText) => {
    setEditingPostIndex(index);
    setEditedText(currentText);
    setOptionsPostIndex(null);
  };

  const handleDeleteClick = (index) => {
    setPosts((prevPosts) => prevPosts.filter((post, i) => i !== index));
    setOptionsPostIndex(null);
  };

  const saveEditedPost = (index) => {
    setPosts((prevPosts) =>
      prevPosts.map((post, i) =>
        i === index ? { ...post, text: editedText } : post
      )
    );
    setEditingPostIndex(null);
  };

  return (
    <>
      <div className="bg-[#F4F2EE] min-h-screen flex justify-center pt-[5rem]">
        <div className="max-w-6xl w-full flex md:flex-row flex-col gap-6 p-4">
          {/* Left Sidebar (Profile) */}
          <div className="w-full md:w-1/4 bg-white p-4 rounded-lg shadow-md relative overflow-hidden">
            <div className="w-full h-[10vh] absolute top-0 left-0 z-10">
              <img
                src={cardbg}
                className="h-full w-full object-cover"
                alt="Card Background"
              />
            </div>
            <div className="w-20 h-20 rounded-full border-4 z-[99] relative mx-auto overflow-hidden">
              <img
                src={user.photo || userimg}
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>
            <h2 className="text-center text-lg font-semibold mt-2 z-20">
              {user.name || "Amit Pandey"}
            </h2>

            {/* Editable Profile Info Section */}
            <div className="text-center text-sm text-gray-600 z-10">
              {editing ? (
                <input
                  type="text"
                  value={profileInfo}
                  onChange={(e) => setProfileInfo(e.target.value)}
                  onBlur={() => setEditing(false)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") setEditing(false);
                  }}
                  className="border-none outline-none p-1 rounded text-center"
                  autoFocus
                />
              ) : (
                <p
                  onClick={() => setEditing(true)}
                  style={{ whiteSpace: "pre-line", cursor: "pointer" }}
                >
                  {profileInfo}
                </p>
              )}
            </div>

            <div className="mt-4 border-t pt-3">
              <div className="text-sm text-gray-600 flex justify-between hover:bg-[#F4F2EE] px-2">
                Profile viewers <span className="text-blue-500">32</span>
              </div>
              <div className="text-sm text-gray-600 flex justify-between hover:bg-[#F4F2EE] px-2">
                Post impressions <span className="text-blue-500">12</span>
              </div>
            </div>
            <div className="mt-4 text-sm border-t py-4 px-2 hover:bg-[#F4F2EE]">
              <p>Access exclusive tools & insights</p>
              <div className="flex items-center gap-2">
                <i className="ri-bank-card-fill text-xl bg-gradient-to-r from-[#C37D16] to-[#E7A33E] bg-clip-text text-transparent"></i>
                Try 1 month for ₹0
              </div>
            </div>
            <div className="text-sm mt-4 border-t py-4 px-2 hover:bg-[#F4F2EE]">
              <div className="flex">
                <img src={item} alt="Saved items" />
                <span className="ml-2">Saved items</span>
              </div>
            </div>
          </div>

          {/* Main Feed */}
          <div className="w-full md:w-1/2">
            {/* Start a Post Section */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex justify-center items-center gap-2">
                <div className="w-14 h-12">
                  <img
                    src={user.photo || userimg}
                    alt="Profile"
                    className="w-full h-full mx-auto rounded-full border-4"
                  />
                </div>
                {/* Clicking this input opens the PostModal */}
                <input
                  type="text"
                  placeholder="Start a post..."
                  className="w-full border outline-none p-2 rounded-2xl"
                  onClick={() => setShowModal(true)}
                />
              </div>
              <div className="flex justify-between mt-2">
                <button className="flex items-center font-medium text-[#2c2c2c]">
                  <i className="ri-image-fill text-[#0A66C2] text-[1.5rem]"></i>{" "}
                  Photo
                </button>
                <button className="flex items-center text-[#2c2c2c]">
                  <i className="ri-movie-fill text-[#5F9B41] text-[1.5rem]"></i>{" "}
                  Video
                </button>
                <button className="flex items-center text-[#2c2c2c]">
                  <i className="ri-book-open-fill text-[#E06847] text-[1.5rem]"></i>{" "}
                  Write Article
                </button>
              </div>
            </div>

            {/* Render Posts */}
            {posts.map((post, index) => (
              <div
                key={index}
                className="bg-white p-4 mt-4 rounded-lg shadow-md relative"
              >
                <div className="flex items-center">
                  <img
                    src={post.authorPhoto || userimg}
                    alt="User"
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex items-center justify-between w-full">
                    <div className="ml-3">
                      <h3 className="text-sm font-semibold">
                        {post.authorName}
                      </h3>
                      <p className="text-xs text-gray-500 capitalize">
                        {profileInfo}
                      </p>
                    </div>
                    {/* Options Button */}
                    <div
                      className="cursor-pointer flex justify-center items-center text-3xl rotate-90 relative"
                      onClick={() =>
                        setOptionsPostIndex(
                          optionsPostIndex === index ? null : index
                        )
                      }
                    >
                      ...
                      {optionsPostIndex === index && (
                        <div className="absolute  -rotate-90 right-10 top-[100%] mt-1 bg-white border rounded shadow-md p-2 z-10 flex flex-col">
                          <button
                            onClick={() =>
                              handleEditClick(index, post.text)
                            }
                            className="text-sm text-blue-600 hover:underline text-left"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteClick(index)}
                            className="text-sm text-red-600 hover:underline text-left mt-1"
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                {/* Post Content */}
                {editingPostIndex === index ? (
                  <input
                    type="text"
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                    onBlur={() => saveEditedPost(index)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        saveEditedPost(index);
                      }
                    }}
                    className="mt-2 border rounded p-2 outline-none w-full"
                    autoFocus
                  />
                ) : (
                  <p className="mt-2 text-gray-700">{post.text}</p>
                )}
                {/* Image Preview */}
                {post.image && (
                  <div className="h-[70vh] w-full mx-auto mt-2">
                    <img
                      src={post.image}
                      alt="Post"
                      className="h-full w-full object-cover rounded"
                    />
                  </div>
                )}
                {/* Video Preview */}
                {post.video && (
                  <video
                    controls
                    className="mt-2 rounded w-full max-h-80"
                  >
                    <source src={post.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
                <div className="flex justify-between px-2 py-1 mt-2 text-gray-500">
                  <div className="flex">
                    <span>👍</span>
                    <span className="ml-1">👏58</span>
                  </div>
                  <p>5 comments</p>
                </div>
                <div className="flex justify-between mt-2 text-gray-500">
                  <button className="hover:bg-[#f4f2ee] px-4 py-2">
                    <i className="ri-thumb-up-line"></i> Like
                  </button>
                  <button className="hover:bg-[#f4f2ee] px-4 py-2">
                    <i className="ri-message-2-line"></i> Comment
                  </button>
                  <button className="hover:bg-[#f4f2ee] px-4 py-2">
                    <i className="ri-share-forward-line"></i> Share
                  </button>
                  <button className="hover:bg-[#f4f2ee] px-4 py-2">
                    <i className="ri-send-plane-line"></i> Send
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Sidebar (Trending) */}
          <div className="w-full md:w-1/4 bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Trending Now</h3>
            <ul className="mt-2 text-sm text-gray-700">
              <li className="py-2 border-b">
                🔥 Honda, Nissan scrap merger
              </li>
              <li className="py-2 border-b">
                💰 Luxury brands bet big in India
              </li>
              <li className="py-2 border-b">
                🏥 Health cover remains stable
              </li>
              <li className="py-2 border-b">
                📉 RBI steps up forex reserves
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Render the PostModal when showModal is true */}
      {showModal && (
        <PostModal
          onClose={() => setShowModal(false)}
          onAddPost={handleAddPost}
        />
      )}
    </>
  );
};

export default Home;
