// PostSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.push({
        ...action.payload,
        reactions: { clap: 0, thumbsup: 0, heart: 0, ok: 0 },
        userReaction: null,
        comments: [],
      });
    },
    editPost: (state, action) => {
      const { index, text } = action.payload;
      if (state.posts[index]) {
        state.posts[index].text = text;
      }
    },
    deletePost: (state, action) => {
      state.posts.splice(action.payload, 1);
    },
    updateReaction: (state, action) => {
      const { index, reaction } = action.payload;
      if (state.posts[index]) {
        const post = state.posts[index];
        if (!post.reactions) {
          post.reactions = { clap: 0, thumbsup: 0, heart: 0, ok: 0 };
        }
        if (post.userReaction) {
          if (post.userReaction === reaction) {
            post.reactions[reaction] = Math.max((post.reactions[reaction] || 0) - 1, 0);
            post.userReaction = null;
          } else {
            post.reactions[post.userReaction] = Math.max((post.reactions[post.userReaction] || 0) - 1, 0);
            post.reactions[reaction] = (post.reactions[reaction] || 0) + 1;
            post.userReaction = reaction;
          }
        } else {
          post.reactions[reaction] = (post.reactions[reaction] || 0) + 1;
          post.userReaction = reaction;
        }
      }
    },
    addComment: (state, action) => {
      const { index, comment } = action.payload;
      if (state.posts[index]) {
        state.posts[index].comments.push(comment);
      }
    },
  },
});

export const { addPost, editPost, deletePost, updateReaction, addComment } = postsSlice.actions;
export default postsSlice.reducer;
