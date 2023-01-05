import { Box, Stack, TextField } from "@mui/material";
import axios from "axios";
import { FC, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { Post } from "../../types/post/Post";

const defaultPost = {
  title: "",
  text: "",
  image: "",
};
export const EditPost: FC = () => {
  const { id } = useParams<{ id: string }>();
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      title: defaultPost.title,
      text: defaultPost.text,
      image: defaultPost.image,
    },
  });

  const fetchEditPost = async () => {
    try {
      const res = await axios.get<Post>(
        `http://localhost:3010/api/v1/posts/${id}`
      );
      if (res.status === 200 && res.data) {
        reset({
          title: res.data.post.title,
          text: res.data.post.text,
          image: res.data.post.image,
        });
      }
    } catch (e: any) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchEditPost();
  }, []);

  const onUpdateSubmit = async (data: any) => {
    await axios.patch(`http://localhost:3010/api/v1/posts/${id}`, data);
  };
  return (
    <>
      <h1>編集ページ</h1>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
          margin: "0 auto",
        }}
      >
        <Stack spacing={15}>
          <Controller
            control={control}
            name="title"
            render={({ field }) => (
              <TextField
                {...field}
                error={!!errors.title}
                helperText={errors.title?.message}
                required
                id="title"
                name="title"
                label="タイトル"
                fullWidth
                color="secondary"
                variant="outlined"
                focused
              />
            )}
          />
          <Controller
            control={control}
            name="text"
            render={({ field }) => (
              <TextField
                {...field}
                error={!!errors.text}
                helperText={errors.text?.message}
                required
                id="text"
                name="text"
                label="本文"
                multiline
                rows={8}
                color="secondary"
                variant="outlined"
                focused
              />
            )}
          />
          <Controller
            control={control}
            name="image"
            render={({ field }) => (
              <input
                {...field}
                required
                id="image"
                name="image"
                color="secondary"
                type="file"
              />
            )}
          />
          <input type="submit" onClick={handleSubmit(onUpdateSubmit)} />
        </Stack>
      </Box>
    </>
  );
};
