import { Box } from "@mui/system";
import axios from "axios";
import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TweetIndexType } from "../../types/tweet/TweetType";
import React from "react";
type Props = {
  tweets: TweetIndexType[];
};
export const ListTweet: FC<Props> = (props) => {
  const { tweets } = props;

  return (
    <>
      <Box style={{ textAlign: "center" }}>
        <h1>ツイート一覧</h1>
        {tweets.map((tweet) => {
          return (
            <React.Fragment key={tweet.id}>
              <div>
                <div>
                  {tweet.tweet}
                  <br />
                  <Link to={`/tweet_edi/${tweet.id}`}>ツイートを編集する</Link>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </Box>
    </>
  );
};
