import { Box } from "@mui/system";
import { FC } from "react";
import { Link } from "react-router-dom";
import { Post, PostIndex } from "../../types/post/Post";

type Props = {
  allPosts: PostIndex[];
};
export const UserIndexComponents: FC<Props> = (props) => {
  const { allPosts } = props;
  return (
    <>
      <Box style={{ textAlign: "center" }}>
        <h2>投稿一覧</h2>
        {allPosts.map((post: PostIndex) => {
          return (
            <>
              <div key={post.id}>
                <Link to={`posts_show/${post.id}`}>{post.title}</Link>
              </div>
            </>
          );
        })}
      </Box>
    </>
  );
};
