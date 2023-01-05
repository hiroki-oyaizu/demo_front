import axios from "axios";
import { TweetIndexType, TweetType } from "../../types/tweet/TweetType";

export interface ApiResponse<T> {
  data?: T;
  error?: string[];
  status?: number;
}
export const Tweetrequest = async () => {
  try {
    const data = await axios.get<TweetIndexType[]>(
      "http://localhost:3010/api/v1/tweets"
    );
    return { data };
  } catch (error: any) {
    return { error: error.response.data };
  }
};
