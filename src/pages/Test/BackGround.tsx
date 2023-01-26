import { Button } from "@chakra-ui/react";
import { Box, Stack } from "@mui/material";
import { useState } from "react";

export const BackGround = () => {
  const test = {
    backgroundColor: "pink",
  };

  const test2 = {
    backgroundColor: "red",
  };
  const [bgcolor, setBgcolor] = useState<boolean>(false);
  const [myhand, setMyhand] = useState<string>("");
  const [computerHand, setComputerHand] = useState<string>("");
  const [jageComment, setJageComment] = useState<string>("");
  const checkColor = () => {
    setBgcolor(!bgcolor);
  };

  const selectHand = (hand: string) => {
    setMyhand(hand);
    geneleteComputerHand();
    jage();
  };
  const jage = () => {
    console.log(myhand);
    console.log(computerHand);
    if (myhand === computerHand) {
      setJageComment("引き分け");
    } else if (
      (myhand === "✊" && computerHand === "✌️") ||
      (myhand === "✌️" && computerHand === "🖐") ||
      (myhand === "🖐" && computerHand === "✊")
    ) {
      setJageComment("私の勝ち");
    } else {
      setJageComment("私の負け");
    }
  };
  const geneleteComputerHand = () => {
    const randamNumber = Math.floor(Math.random() * 3);
    const getHand = decisionHand(randamNumber);
    setComputerHand(getHand);
  };

  const decisionHand = (num: number) => {
    switch (num) {
      case 0:
        return "✊";
        break;
      case 1:
        return "✌️";
        break;
      case 2:
        return "🖐";
        break;
      default:
        return "✊";
    }
  };

  return (
    <>
      {/* {console.log(Math.floor(Math.random() * 4))} */}
      <Box
        style={{
          height: "100vh",
          width: "100vw",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <Box style={bgcolor ? test : test2}>
          <Stack spacing={4}>
            <Box>
              <input></input>
            </Box>
            <Box>
              <Button onClick={checkColor}>背景変更</Button>
            </Box>
          </Stack>
        </Box>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "100px",
          }}
        >
          <Box>
            <Button onClick={() => selectHand("✊")}>✊</Button>
          </Box>
          <Box>
            <Button onClick={() => selectHand("✌️")}>✌️</Button>
          </Box>
          <Box>
            <Button onClick={() => selectHand("🖐")}>🖐</Button>
          </Box>
        </Box>
        <Stack style={{ marginTop: "30px" }} spacing={3}>
          <Box>自分の手{myhand}</Box>
          <Box>自分の手{computerHand}</Box>
          <h2>判定結果</h2>
          <Box>{jageComment}</Box>
        </Stack>
      </Box>
    </>
  );
};
