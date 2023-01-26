import { Box, Button } from "@mui/material";
import axios from "axios";
import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserIndexComponents } from "../../components/user/UserIndexComponents";
import { usePost } from "../../hooks/post/usePost";
import { Post } from "../../types/post/Post";

export const PostsIndex: FC = () => {
  const { fetchAllPosts, allPosts } = usePost();
  // const [allPosts, setAllPosts] = useState<Array<Post>>([]);
  // const fetchAllPosts = async () => {
  //   const res = await axios.get("http://localhost:3010/api/v1/posts");
  //   setAllPosts(res.data);
  // };

  useEffect(() => {
    fetchAllPosts();
  }, []);

  return (
    <>
      <UserIndexComponents allPosts={allPosts} />
    </>
  );
};
