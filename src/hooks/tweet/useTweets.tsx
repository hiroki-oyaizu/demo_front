import axios from "axios";
import { useState } from "react";
import { Tweetrequest } from "../../components/api/TweetApi";
import { TweetIndexType } from "../../types/tweet/TweetType";

const InitializeIndex: TweetIndexType = {
  id: 0,
  tweet: "",
  tag: 0,
};
export const useTweets = () => {
  const [tweets, setTweets] = useState<TweetIndexType>(InitializeIndex);

  const fetchTweets = async () => {
    try {
      const response = await axios.get<TweetIndexType>(
        "http://localhost:3010/api/v1/tweets"
      );
      if (response.status === 200 && response.data) {
        setTweets(response.data);
      }
    } catch (e: any) {
      return { error: e.response.data };
    }
  };

  return { tweets, fetchTweets };
};
