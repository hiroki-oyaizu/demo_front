export type PostIndex = {
  id: number;
  title: string;
  text: string;
  image: string;
};

export type Post = {
  post: {
    id: number;
    title: string;
    text: string;
    image: string;
  };
  num: number;
};
