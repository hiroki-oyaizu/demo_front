import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";
import { MusicIndex } from "./pages/MusicIndex";
import { Cbutton } from "./components/atomic/Cbutton";
import { useForm } from "react-hook-form";
const Bstyle = {
  borderRadius: 10,
  color: "white",
  backgroundColor: "teal",
};

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { email: "john@test.com", password: "pass" } });

  const onSubmit = (data: any) => console.log(data);

  return (
    <>
      <div className="App">
        <h1>HOME</h1>
        <Link to={"/user_index"}>ユーザー一覧ページへ</Link>
        <div>
          <Link to={"/posts_new"}>記事投稿ページへ</Link>
        </div>
        <div>
          <Link to={"/posts_index"}>記事一覧ページ</Link>
        </div>
        <div>
          <Link to={"/tweet_index"}>ツイート一覧ページ</Link>
        </div>
        <div>
          <Link to={"/tweet_new"}>ツイート投稿ページ</Link>
        </div>
      </div>
    </>
  );
}

export default App;
