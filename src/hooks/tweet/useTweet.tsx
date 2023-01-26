import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TweetIndexType, TweetType } from "../../types/tweet/TweetType";

export const useTweet = () => {
  interface ApiResponse<T> {
    data?: T;
    error?: string[];
    status?: number;
  }
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const InitializeIndex: TweetIndexType = {
    id: 0,
    tweet: "",
    tag: 0,
  };

  const [tweets, setTweets] = useState<Array<TweetIndexType>>([
    InitializeIndex,
  ]);

  const fetchTweets = async () => {
    try {
      const response = await axios.get<TweetIndexType[]>(
        "http://localhost:3010/api/v1/tweets"
      );
      if (response.status === 200 && response.data) {
        setTweets(response.data);
      }
    } catch (e: any) {
      return { error: e.response.data };
    }
  };

  const onClickTweet = async (data: TweetType) => {
    console.log(data);
    await axios.post("http://localhost:3010/api/v1/tweets", data);
    navigate("/");
  };

  const onClicktwee = async (params: TweetType) => {
    try {
      await axios.post("http://localhost:3010/api/v1/tweets", params);
      navigate("/");
    } catch (e: any) {
      console.log(e);
    }
  };

  const onEditTweet = async (params: TweetType) => {
    try {
      console.log(id);
      axios.patch(`"http://localhost:3010/api/v1/tweets/${id}`, params);
      navigate("/");
    } catch (error: any) {
      return { error: error.response.data };
    }
  };

  return { onClickTweet, tweets, fetchTweets, onEditTweet };
};
