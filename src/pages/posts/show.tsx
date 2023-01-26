import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { FC, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { usePost } from "../../hooks/post/usePost";
import { useEditUser } from "../../hooks/user/useEditUser";
import { Post } from "../../types/post/Post";

type CommentType = {
  id: number;
  post_id: number;
  comment: string;
};
export const ShowPosts: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post>();
  const [comments, setCommnets] = useState<Array<CommentType>>([]);
  const { deletePost } = usePost();
  const navigate = useNavigate();
  const getPostData = async () => {
    try {
      const res = await axios.get<Post>(
        `http://localhost:3010/api/v1/posts/${id}`
      );
      if (res.status === 200 && res.data) {
        setPost(res.data);
        // navigate("/");
      }
    } catch (e: any) {
      console.log(e);
    }
  };

  useEffect(() => {
    getPostData();
    getComment();
  }, []);

  const getComment = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3010/api/v1/posts/${id}/comments`
      );
      if (res.status === 200 && res.data) {
        setCommnets(res.data);
      }
    } catch (e: any) {
      console.log(e);
    }
  };

  return (
    <>
      <Box style={{ textAlign: "center" }}>
        <h1>詳細</h1>
        <Typography variant="h5">記事のタイトル</Typography>
        {post?.post.title}
        <br />
        <Typography variant="h5">記事の総売り上げ</Typography>
        {post?.num}
        <Box>
          <Button onClick={deletePost}>削除</Button>
        </Box>
        <Link to={`/posts_edit/${id}`}>編集</Link>
        <br />
        <Link to={`/comment_new/${id}`}>コメントする</Link>
        <br></br>
        <Link to={`/purchase_new/${id}`}>購入ページへ</Link>
        <div style={{ border: "1px solid red", marginTop: "50px" }}>
          <h3>コメント一覧</h3>
          <div>
            {comments.map((comment) => {
              return <div>{comment.comment}</div>;
            })}
          </div>
        </div>
      </Box>
    </>
  );
};
