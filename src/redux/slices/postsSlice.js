import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    {
      id: 5,
      title: "Post 5",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZU7ChjOxMb89wS_wPYGiylxtX_mKb89ICXQ&s",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga asperiores magni illo quidem culpa, dolores cumque, corrupti fugiat sed sint laboriosam veritatis ratione. Earum autem eveniet placeat consequatur aliquid adipisci?",
    },
    {
      id: 4,
      title: "Post 4",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZU7ChjOxMb89wS_wPYGiylxtX_mKb89ICXQ&s",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga asperiores magni illo quidem culpa, dolores cumque, corrupti fugiat sed sint laboriosam veritatis ratione. Earum autem eveniet placeat consequatur aliquid adipisci?",
    },
    {
      id: 3,
      title: "Post 3",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZU7ChjOxMb89wS_wPYGiylxtX_mKb89ICXQ&s",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga asperiores magni illo quidem culpa, dolores cumque, corrupti fugiat sed sint laboriosam veritatis ratione. Earum autem eveniet placeat consequatur aliquid adipisci?",
    },
    {
      id: 2,
      title: "Post 2",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZU7ChjOxMb89wS_wPYGiylxtX_mKb89ICXQ&s",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga asperiores magni illo quidem culpa, dolores cumque, corrupti fugiat sed sint laboriosam veritatis ratione. Earum autem eveniet placeat consequatur aliquid adipisci?",
    },
    {
      id: 1,
      title: "Post 1",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZU7ChjOxMb89wS_wPYGiylxtX_mKb89ICXQ&s",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga asperiores magni illo quidem culpa, dolores cumque, corrupti fugiat sed sint laboriosam veritatis ratione. Earum autem eveniet placeat consequatur aliquid adipisci?",
    },
  ],
  postForView: null,
  freshPosts: null,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.list = action.payload;
    },
    editPost: (state, action) => {
      // edit post
    },
    getPost: (state, action) => {
      state.postForView = state.list.find((item) => item.id === action.payload);
    },
    getFreshPosts: (state) => {
      state.freshPosts = state.list.slice(0, 2)
    },
    addPost: (state, action) => {
      // add new post by data
    },
  },
});

export const { setPosts, editPost, getPost, getFreshPosts, addPost } = postsSlice.actions;

export default postsSlice.reducer;
