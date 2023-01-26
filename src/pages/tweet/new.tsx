import { FormTweet } from "../../components/tweet/FormTweet";
import { useTweet } from "../../hooks/tweet/useTweet";

export const NewTweet = () => {
  const { onClickTweet } = useTweet();
  return (
    <>
      <FormTweet onClickTweet={onClickTweet} />
    </>
  );
};
