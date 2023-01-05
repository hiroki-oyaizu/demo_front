import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Post, PostIndex } from "../../types/post/Post";

export const usePost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [allPosts, setAllPosts] = useState<Array<PostIndex>>([]);

  const fetchAllPosts = async () => {
    const res = await axios.get("http://localhost:3010/api/v1/posts");
    setAllPosts(res.data);
  };

  const deletePost = async () => {
    try {
      await axios.delete(`http://localhost:3010/api/v1/posts/${id}`);
      navigate("/");
    } catch (e: any) {
      console.log(e);
    }
  };
  return { deletePost, allPosts, fetchAllPosts };
};
