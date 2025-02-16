// src/components/PostModal.jsx
import React, { useState } from "react";
import { useSelector } from "react-redux";

const PostModal = ({ onClose, onAddPost }) => {
  const user = useSelector((state) => state.user);

  // Local state for text, image, and video
  const [postText, setPostText] = useState("");
  const [imageURL, setImageURL] = useState(null);
  const [videoURL, setVideoURL] = useState(null);

  // Handle "Post" button
  const handlePost = () => {
    // Must have at least some text, image, or video
    if (!postText.trim() && !imageURL && !videoURL) return;

    // Pass the data back to the parent
    onAddPost({
      authorName: user.name,
      authorPhoto: user.photo,
      text: postText,
      image: imageURL,
      video: videoURL,
    });

    // Close modal
    onClose();
  };

  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageURL(url);
    }
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setVideoURL(url);
    }
  };

  const removeImage = () => setImageURL(null);
  const removeVideo = () => setVideoURL(null);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg w-full max-w-xl mx-4 sm:mx-auto">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold">Create a post</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="p-4">
          <div className="flex items-center mb-4">
            <img
              src={user.photo}
              alt="Profile"
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <h3 className="font-semibold">{user.name}</h3>
              {/* "Anyone" dropdown (dummy) */}
              <button className="flex items-center text-sm text-blue-600 hover:underline">
                Anyone
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.5 8L10 12.5 14.5 8h-9z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Text Area */}
          <textarea
            className="w-full h-32 p-2 border border-transparent focus:border-blue-300 rounded resize-none outline-none"
            placeholder="What do you want to talk about?"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
          />

          {/* Preview of selected image or video */}
          {imageURL && (
            <div className="mt-2 relative">
              <img src={imageURL} alt="Preview" className="h-[30vh] w-1/2 bg-red-100 object-cover rounded" />
              <button
                onClick={removeImage}
                className="absolute top-2 right-2 bg-gray-100 rounded-full p-1 text-gray-600 hover:text-gray-900"
              >
                ✕
              </button>
            </div>
          )}
          {videoURL && (
            <div className="mt-2 relative">
              <video controls className="max-h-64 w-full rounded">
                <source src={videoURL} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <button
                onClick={removeVideo}
                className="absolute top-2 right-2 bg-gray-100 rounded-full p-1 text-gray-600 hover:text-gray-900"
              >
                ✕
              </button>
            </div>
          )}

          {/* Footer / Action Row */}
          <div className="flex items-center justify-between mt-4">
            {/* Icons Row */}
            <div className="flex space-x-2 text-gray-600">
              {/* Image Upload */}
              <label htmlFor="post-image-upload" className="flex items-center hover:text-blue-600 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 mr-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h2l2-2h10l2 2h2v14H3V5z" />
                  <circle cx="12" cy="13" r="3" stroke="none" fill="currentColor" />
                </svg>
                <span className="hidden sm:inline text-sm">Photo</span>
              </label>
              <input
                type="file"
                id="post-image-upload"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />

              {/* Video Upload */}
              <label htmlFor="post-video-upload" className="flex items-center hover:text-blue-600 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 mr-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.55-2.28A1 1 0 0121 8.61v6.78a1 1 0 01-1.45.89L15 14" />
                  <rect x="3" y="6" width="12" height="12" rx="2" />
                </svg>
                <span className="hidden sm:inline text-sm">Video</span>
              </label>
              <input
                type="file"
                id="post-video-upload"
                accept="video/*"
                className="hidden"
                onChange={handleVideoChange}
              />
            </div>

            {/* Post Button */}
            <button
              onClick={handlePost}
              disabled={!postText.trim() && !imageURL && !videoURL}
              className={`px-4 py-1 rounded-full text-white font-semibold ${
                postText.trim() || imageURL || videoURL
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
