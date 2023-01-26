import { Box, Button, Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useAnimatedState } from "framer-motion/types/animation/use-animated-state";
import { useState } from "react";

type WeaterType = {
  message: null;
  results: [
    {
      address1: string;
      address2: string;
      address3: string;
      kana1: string;
      kana2: string;
      kana3: string;
      prefcode: string;
      zipcode: string;
    }
  ];
  status: number;
};

const defaultWeater = {
  message: null,
  results: [
    {
      address1: "",
      address2: "",
      address3: "",
      kana1: "",
      kana2: "",
      kana3: "",
      prefcode: "",
      zipcode: "",
    },
  ],
  status: 0,
};

export const Weater = () => {
  const [inputWeater, setInputWeater] = useState("");
  const [weater, setWeater] = useState(defaultWeater);

  const onClickWeater = async () => {
    try {
      const res = await axios.get(
        `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${inputWeater}`
      );
      console.log(res);
      setWeater(res.data);
      setInputWeater("");
      if (res.data) {
        // setWeater(res.data);
      }
    } catch (e: any) {
      console.log(e);
    }
  };
  return (
    <>
      <Box style={{ textAlign: "center" }}>
        <h3>天気検索</h3>
        <Stack spacing={6}>
          <h3>郵便番号を入力してください</h3>
          <TextField
            style={{ margin: "0 auto" }}
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            sx={{ width: "25ch" }}
            value={inputWeater}
            onChange={(e: any) => setInputWeater(e.target.value)}
          />
          <Button onClick={onClickWeater}>検索</Button>
        </Stack>
        <>
          <h3>住所</h3>
          {weater.results[0].address1}
          {weater.results[0].address2}
          {weater.results[0].address3}
        </>
      </Box>
    </>
  );
};
