import { Box, Stack } from "@mui/system";
import { FC } from "react";
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
import { useNavigate } from "react-router-dom";
interface Props {
  onClickTweet: (params: TweetType) => void;
}
export const FormTweet: FC<Props> = ({ onClickTweet }) => {
  // const { onClickTweet } = props;
  const navigate = useNavigate();

  const defaultTweet = {
    tweet: "",
    tag: 0,
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TweetType>({
    defaultValues: {
      tweet: defaultTweet.tweet,
      tag: defaultTweet.tag,
    },
  });

  // const onClickTweet = async (data: any) => {
  //   console.log(data);
  //   await axios.post("http://localhost:3010/api/v1/tweets", data);
  //   navigate("/");
  // };

  return (
    <>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
          margin: "0 auto",
        }}
        style={{ textAlign: "center" }}
      >
        <h3>ツイートを投稿する</h3>
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
          <Button onClick={handleSubmit(onClickTweet)}>送信</Button>
        </Stack>
      </Box>
    </>
  );
};
