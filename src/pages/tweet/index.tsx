import { useEffect } from "react";
import { ListTweet } from "../../components/tweet/ListTweet";
import { useTweet } from "../../hooks/tweet/useTweet";

export const TweetIndex = () => {
  const { fetchTweets, tweets } = useTweet();

  useEffect(() => {
    fetchTweets();
  }, []);
  return (
    <>
      <ListTweet tweets={tweets} />
    </>
  );
};
