import { Grid } from "@chakra-ui/react";
import { TextFields } from "@material-ui/icons";
import { TextareaAutosize, TextField } from "@mui/material";
import { Box, Stack } from "@mui/system";
import axios from "axios";
import { initial } from "cypress/types/lodash";
import { FC } from "react";
import {
  SubmitHandler,
  UseFormHandleSubmit,
  FieldErrors,
  Control,
  Controller,
  UseFormGetValues,
  UseFormSetValue,
  useForm,
} from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const PostsNew: FC = () => {
  const navigate = useNavigate();
  const initPost = {
    title: "",
    text: "",
    image: "",
  };

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
    setValue,
    reset,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      title: initPost.title,
      text: initPost.text,
      image: initPost.image,
    },
  });

  const onSubmit = async (data: any) => {
    await axios.post("http://localhost:3010/api/v1/posts", data);
    navigate("/");
  };

  return (
    <>
      <h1>記事投稿</h1>

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
          <input type="submit" onClick={handleSubmit(onSubmit)} />
        </Stack>
      </Box>
    </>
  );
};
