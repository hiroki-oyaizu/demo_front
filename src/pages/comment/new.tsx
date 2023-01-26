import { Button, TextField } from "@mui/material";
import axios from "axios";
import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

export const CommentNew: FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  console.log(id);
  const defaultComment = {
    commnet: "",
  };
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      comment: defaultComment.commnet,
    },
  });
  const submitCommnet = async (data: any) => {
    console.log(data);
    try {
      await axios.post(
        `http://localhost:3010/api/v1/posts/${id}/comments`,
        data
      );
      navigate(`/posts_index/posts_show/${id}`);
    } catch (e: any) {
      console.log(e);
    }
  };
  return (
    <>
      <h1>コメントする</h1>
      <Controller
        control={control}
        name="comment"
        render={({ field }) => <TextField {...field} />}
      />
      <div>
        <Button onClick={handleSubmit(submitCommnet)}>送信</Button>
      </div>
    </>
  );
};
