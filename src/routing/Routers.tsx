import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import { MusicIndex } from "../pages/MusicIndex";
import { PostsIndex } from "../pages/posts";
import { EditPost } from "../pages/posts/edit";
import { PostsNew } from "../pages/posts/new";
import { ShowPosts } from "../pages/posts/show";
import { Signin } from "../pages/login/Signin";
import { UserEdit } from "../pages/user/UserEdit";
import { UserIndex } from "../pages/user/UserIndex";
import { CommentNew } from "../pages/comment/new";
import { PurchaseNew } from "../pages/purchase /new";
import { NewTweet } from "../pages/tweet/new";
import { TweetIndex } from "../pages/tweet";
import { EditFormTweet } from "../components/tweet/EditFormTweet";

import { FormTest } from "../pages/Test/FormTest";
import { ShowBranch } from "../pages/Test/ShowBranch";
import { BackGround } from "../pages/Test/BackGround";
import { Login } from "../pages/login/Login";
import { GenreNew } from "../pages/genre/new";
import { GenreIndex } from "../pages/genre";
import { GenreShow } from "../pages/genre/show";
import { Responsive } from "../pages/Test/Responsive";
import { Test } from "../pages/Test/game2";
import { GridTest } from "../pages/Test/GridTest";
import { Weater } from "../pages/Test/Weater";
import { AnimalIndex } from "../pages/animal";
export const Routers = () => {
  return (
    <>
      <Routes>
        <Route index element={<App />} />
        <Route path="/music" element={<MusicIndex />} />
        <Route path="/posts_index" element={<PostsIndex />} />
        <Route path="/posts_new" element={<PostsNew />} />
        <Route path="/posts_edit/:id" element={<EditPost />} />
        <Route path="/posts_index/posts_show/:id" element={<ShowPosts />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Login />} />
        <Route path="user_index" element={<UserIndex />} />
        <Route path="user_index/edit_user/:id" element={<UserEdit />} />
        <Route path="comment_new/:id" element={<CommentNew />} />
        <Route path="purchase_new/:id" element={<PurchaseNew />} />
        <Route path="/tweet_index" element={<TweetIndex />} />
        <Route path="/tweet_new" element={<NewTweet />} />
        <Route path="/tweet_edi/:id" element={<EditFormTweet />} />
        <Route path="/test" element={<Test />} />
        <Route path="form_test" element={<FormTest />} />
        <Route path="/show" element={<ShowBranch />} />
        <Route path="/backg" element={<BackGround />} />
        <Route path="/genres_index" element={<GenreIndex />} />
        <Route path="/genres_posts" element={<GenreNew />} />
        <Route path="/genres/:id" element={<GenreShow />} />
        <Route path="/res" element={<Responsive />} />
        <Route path="/grid" element={<GridTest />} />
        <Route path="/weater" element={<Weater />} />
        <Route path="/animal" element={<AnimalIndex />} />
      </Routes>
    </>
  );
};
