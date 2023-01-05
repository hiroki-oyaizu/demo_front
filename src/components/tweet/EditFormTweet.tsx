import { Box, Stack } from "@mui/system";
import { FC, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { Controller, useForm } from "react-hook-form";
import { TweetType } from "../../types/tweet/TweetType";
import { Button, MenuItem, Select, TextField } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import axios from "axios";
import { Tag } from "@chakra-ui/react";
import { TagSelect } from "../../suport/TagSelect";
import { useNavigate, useParams } from "react-router-dom";
import { useTweet } from "../../hooks/tweet/useTweet";

interface Props {}

export const EditFormTweet: FC = () => {
  const navigate = useNavigate();
  // const { onEditTweet } = useTweet();
  const { id } = useParams();
  const defaultTweet = {
    tweet: "",
    tag: 0,
  };

  const {
    reset,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TweetType>({
    defaultValues: {
      tweet: defaultTweet.tweet,
      tag: defaultTweet.tag,
    },
  });

  const EditFetchTweet = async () => {
    try {
      const res = await axios.get(`http://localhost:3010/api/v1/tweets/${id}`);
      if (res.status === 200 && res.data) {
        if (res.data.tag === "no_tag") {
          res.data.tag = 1;
        } else {
          res.data.tag = 0;
        }
        reset({
          tweet: res.data.tweet,
          tag: res.data.tag,
        });
      }
    } catch (e: any) {}
  };

  useEffect(() => {
    EditFetchTweet();
  }, []);

  const onEditTweet = async (params: TweetType) => {
    try {
      axios.patch(`http://localhost:3010/api/v1/tweets/${id}`, params);
      navigate("/tweet_index");
    } catch (error: any) {
      return { error: error.response.data };
    }
  };

  // const onEditTweet = (data: any) => {
  //   console.log(data);
  // };
  return (
    <>
      {console.log(id)}
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
          margin: "0 auto",
        }}
        style={{ textAlign: "center" }}
      >
        <h3>ツイートを編集する</h3>
        <Stack spacing={5}>
          <Typography variant="h6" gutterBottom>
            本文
          </Typography>
          <Controller
            control={control}
            name="tweet"
            render={({ field }) => (
              <TextField
                {...field}
                rows={8}
                color="secondary"
                variant="outlined"
                focused
              />
            )}
          />
          <Typography variant="h6" gutterBottom>
            タグ付け
          </Typography>
          <Controller
            control={control}
            name="tag"
            render={({ field }) => (
              <>
                <Select {...field}>
                  {TagSelect.map((tag) => (
                    <MenuItem key={tag.id} value={tag.id}>
                      {tag.name}
                    </MenuItem>
                  ))}
                </Select>
              </>
            )}
          />
          <Button onClick={handleSubmit(onEditTweet)}>送信</Button>
        </Stack>
      </Box>
    </>
  );
};
