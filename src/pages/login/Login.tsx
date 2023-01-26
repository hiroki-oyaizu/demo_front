import { Box, Button, Input, Stack, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { LoginType } from "../../types/login/LoginType";
export const Login = () => {
  // もし入力したメールアドレスとパスワードが同じならHOME画面へ
  // mailとpasswordを比較する
  // 失敗ならエラーハンドリング

  const naivgate = useNavigate();
  const [email, setEmail] = useState<string | number>("");
  const [password, setPassword] = useState<string | number>("");
  const [allUsers, setAllUsers] = useState([]);
  const inputEmail = (e: any) => {
    setEmail(e.target.value);
  };
  const inputPassword = (e: any) => {
    setPassword(e.target.value);
  };

  const onClickLogin = async () => {
    try {
      const res = await axios.get("http://localhost:3010/api/v1/users/login");
      if (res.data.status === 200 || res.data) {
        setAllUsers(res.data);
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <>
      <Box style={{ textAlign: "center" }}>
        <h3>ログイン</h3>
        <Stack spacing={9}>
          <Box>
            <Typography>メールアドレス</Typography>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              value={email}
              onChange={inputEmail}
            />
          </Box>
          <Box>
            <Typography>パスワード</Typography>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              value={password}
              onChange={inputPassword}
            />
          </Box>
          <Box>
            <Button onClick={onClickLogin}>ログイン</Button>
          </Box>
          {allUsers.map((user: any) => {
            return (
              <>
                {user.email === email && user.password === password
                  ? naivgate("/")
                  : null}
              </>
            );
          })}
        </Stack>
      </Box>
    </>
  );
};
