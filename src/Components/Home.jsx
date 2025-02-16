// Home.jsx
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import userimg from "../assets/images/user.svg";
import cardbg from "../assets/images/card-bg.svg";
import item from "../assets/images/item-icon.svg";
import PostModal from "../Components/PostModel";
import { setUserLoginDetails, setUserPhoto, setSignOutState } from "../Store/reducers/UserSlice";

import { 
  addPost, 
  editPost, 
  deletePost, 
  updateReaction, 
  addComment 
} from "../Store/reducers/PostSlice"; 
import { useNavigate } from "react-router-dom";

const Home = () => {
  const user = useSelector((state) => state.user);
  const posts = useSelector((state) => state.post.posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [profileInfo, setProfileInfo] = useState("Add Info");
  const [editing, setEditing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [optionsPostIndex, setOptionsPostIndex] = useState(null);
  const [editingPostIndex, setEditingPostIndex] = useState(null);
  const [editedText, setEditedText] = useState("");
    const [reactionPopupIndex, setReactionPopupIndex] = useState(null);
  const [commentInputs, setCommentInputs] = useState({});
  const handleAddPost = (newPost) => {
    dispatch(addPost(newPost));
  };
  const handleEditClick = (index, currentText) => {
    setEditingPostIndex(index);
    setEditedText(currentText);
    setOptionsPostIndex(null);
  };

  const handleDeleteClick = (index) => {
    dispatch(deletePost(index));
    setOptionsPostIndex(null);
  };

  const saveEditedPost = (index) => {
    dispatch(editPost({ index, text: editedText }));
    setEditingPostIndex(null);
  };

  const handleReaction = (index, reaction) => {
    dispatch(updateReaction({ index, reaction }));
    setReactionPopupIndex(null);
  };

  const handleCommentInputChange = (index, text) => {
    setCommentInputs({ ...commentInputs, [index]: text });
  };

  const handleCommentSubmit = (index) => {
    if (commentInputs[index] && commentInputs[index].trim() !== "") {
      dispatch(addComment({ index, comment: commentInputs[index].trim() }));
      setCommentInputs({ ...commentInputs, [index]: "" });
    }
  };

  return (
    <>
      <div className="bg-[#F4F2EE] min-h-screen flex justify-center pt-[5rem]">
        <div className="max-w-6xl w-full flex md:flex-row flex-col gap-6 p-4">
          <div className="w-full md:w-1/4 bg-white p-4 rounded-lg shadow-md relative overflow-hidden">
            <div className="w-full h-[10vh] absolute top-0 left-0 z-10">
              <img src={cardbg} className="h-full w-full object-cover" alt="Card Background" />
            </div>
            <div className="w-20 h-20 rounded-full border-4 z-[99] relative mx-auto overflow-hidden">
              <img src={ user.photo || userimg} alt="Profile" className="h-full w-full object-cover" />
            </div>
            <h2 className="text-center text-lg font-semibold mt-2 z-20">{user.name}</h2>
            {/* Editable Profile Info */}
            <div className="text-center text-sm text-gray-600 z-10">
              {editing ? (
                <input
                  type="text"
                  value={profileInfo}
                  onChange={(e) => setProfileInfo(e.target.value)}
                  onBlur={() => setEditing(false)}
                  onKeyDown={(e) => { if (e.key === "Enter") setEditing(false); }}
                  className="border-none outline-none p-1 rounded text-center"
                  autoFocus
                />
              ) : (
                <p onClick={() => setEditing(true)} style={{ whiteSpace: "pre-line", cursor: "pointer" }}>
                  {profileInfo}
                </p>
              )}
            </div>
            {/* Profile Stats */}
            <div className="mt-4 border-t pt-3">
              <div className="text-sm text-gray-600 flex justify-between hover:bg-[#F4F2EE] px-2">
                Profile viewers <span className="text-blue-500">32</span>
              </div>
              <div className="text-sm text-gray-600 flex justify-between hover:bg-[#F4F2EE] px-2">
                Post impressions <span className="text-blue-500">12</span>
              </div>
            </div>
            {/* Extra Tools Section */}
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
            <div  
             onClick={() => {
              dispatch(setSignOutState());
              navigate("/"); 
            }}
            
            className="text-sm mt-4 border-t py-4 px-2 group hover:bg-[#F4F2EE]  cursor-pointer ">
              <div className="flex">
                <span className="ml-2 group-hover:underline">Sign Out</span>
              </div>
            </div>
          </div>

          {/* Main Feed */}
          <div className="w-full md:w-1/2">
            {/* Start a Post Section */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex justify-center items-center gap-2">
                <div className="w-14 h-12">
                  <img src={user.photo || userimg} alt="Profile" className="w-full h-full mx-auto rounded-full border-4" />
                </div>
                <input
                  type="text"
                  placeholder="Start a post..."
                  className="w-full border outline-none p-2 rounded-2xl"
                  onClick={() => setShowModal(true)}
                />
              </div>
              <div className="flex justify-between mt-2">
                <button className="flex items-center font-medium text-[#2c2c2c]">
                  <i className="ri-image-fill text-[#0A66C2] text-[1.5rem]"></i> Photo
                </button>
                <button className="flex items-center text-[#2c2c2c]">
                  <i className="ri-movie-fill text-[#5F9B41] text-[1.5rem]"></i> Video
                </button>
                <button className="flex items-center text-[#2c2c2c]">
                  <i className="ri-book-open-fill text-[#E06847] text-[1.5rem]"></i> Write Article
                </button>
              </div>
            </div>

            {/* Render Posts */}
            {posts.map((post, index) => (
              <div key={index} className="bg-white p-4 mt-4 rounded-lg shadow-md relative">
                <div className="flex items-center">
                  <img src={post.authorPhoto || userimg} alt="User" className="w-10 h-10 rounded-full" />
                  <div className="flex items-center justify-between w-full">
                    <div className="ml-3">
                      <h3 className="text-sm font-semibold">{post.authorName}</h3>
                      <p className="text-xs text-gray-500 capitalize">{profileInfo}</p>
                    </div>
                    {/* Options Dropdown for Edit/Delete */}
                    <div
                      className="cursor-pointer flex justify-center items-center text-3xl rotate-90 relative"
                      onClick={() =>
                        setOptionsPostIndex(optionsPostIndex === index ? null : index)
                      }
                    >
                      ...
                      {optionsPostIndex === index && (
                        <div className="absolute -rotate-90 right-10 top-[100%] mt-1 bg-white border rounded shadow-md p-2 z-10 flex flex-col">
                          <button onClick={() => handleEditClick(index, post.text)} className="text-sm text-blue-600 hover:underline text-left">
                            Edit
                          </button>
                          <button onClick={() => handleDeleteClick(index)} className="text-sm text-red-600 hover:underline text-left mt-1">
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
                    onKeyDown={(e) => { if (e.key === "Enter") saveEditedPost(index); }}
                    className="mt-2 border rounded p-2 outline-none w-full"
                    autoFocus
                  />
                ) : (
                  <p className="mt-2 text-gray-700">{post.text}</p>
                )}
                {/* Existing Comments */}
                {post.comments && post.comments.length > 0 && (
                  <div className="mt-2">
                    {post.comments.map((cmt, idx) => (
                      <p key={idx} className="text-sm text-gray-600 border-b pb-1">{cmt}</p>
                    ))}
                  </div>
                )}

              

                {/* Optional Image Preview */}
                {post.image && (
                  <div className="h-[70vh] w-full mx-auto mt-2">
                    <img src={post.image} alt="Post" className="h-full w-full object-cover rounded" />
                  </div>
                )}

                {/* Optional Video Preview */}
                {post.video && (
                  <video controls className="mt-2 rounded w-full max-h-80">
                    <source src={post.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}

                {/* Action Buttons */}
                <div className="flex justify-between px-2 py-1 mt-2 text-gray-500">
                  <div className="flex">  {post.reactions && (
                  <div className="flex space-x-2 text-sm text-gray-600 mt-2">
                    {post.reactions.thumbsup > 0 && <span>👍 {post.reactions.thumbsup}</span>}
                    {post.reactions.clap > 0 && <span>👏 {post.reactions.clap}</span>}
                    {post.reactions.heart > 0 && <span>❤ {post.reactions.heart}</span>}
                    {post.reactions.ok > 0 && <span>👌 {post.reactions.ok}</span>}
                  </div>
                )}</div>
                  <p></p>
                </div>
                <div className="relative flex justify-between mt-2 text-gray-500">
                  <button
                    className="hover:bg-[#f4f2ee] px-4 py-2"
                    onClick={() => setReactionPopupIndex(index)}
                  >
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

                  {/* Reaction Popup */}
                  {reactionPopupIndex === index && (
                    <div className="absolute -top-10 left-0 flex space-x-2 bg-white border p-1 rounded shadow-md">
                      <button onClick={() => handleReaction(index, "clap")}>👏</button>
                      <button onClick={() => handleReaction(index, "thumbsup")}>👍</button>
                      <button onClick={() => handleReaction(index, "heart")}>❤</button>
                      <button onClick={() => handleReaction(index, "ok")}>👌</button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right Sidebar (Trending) */}
          <div className="w-full md:w-1/4 bg-white p-4 rounded-lg shadow-md">
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

      {/* Post Modal */}
      {showModal && (
        <PostModal onClose={() => setShowModal(false)} onAddPost={handleAddPost} />
      )}
    </>
  );
};

export default Home;
