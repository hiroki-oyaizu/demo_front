import axios from "axios";
import { FC, useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { User } from "../../types/user/User";
import { Box, Stack } from "@mui/system";
import React from "react";
import { LeftLoginImage } from "../atomic/LeftLoginImage";

import { useForm } from "react-hook-form";
import { TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import bgImage from "../img/logo.png";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

type Props = {
  onUpdateSubmit: (params: User) => void;
  editUser: () => void;
  reset: () => void;
};

export const UserEditComponents: FC<Props> = (props) => {
  const { onUpdateSubmit, editUser, reset } = props;
  const { id } = useParams<{ id: string }>();
  const { register, handleSubmit } = useForm<User>();

  useEffect(() => {
    editUser();
  }, []);

  // const seditUser = useCallback(async () => {
  //   try {
  //     const res = await axios.get<User>(
  //       `http://localhost:3010/api/v1/users/${id}`
  //     );
  //     if (res.status === 200 && res.data) {
  //       reset({
  //         nickname: res.data.nickname,
  //         email: res.data.email,
  //         password: res.data.password,
  //         sex: res.data.sex,
  //         notification: res.data.notification,
  //       });
  //     }
  //   } catch (error: any) {
  //     console.log("error");
  //   }
  // }, []);

  // useEffect(() => {
  //   seditUser();
  // }, []);

  const loginTextStyle = {
    fontSize: "30px",
    color: "teal",
  };
  const currencies = [
    {
      value: "male",
      label: "男性",
    },
    {
      value: "woman",
      label: "女性",
    },
  ];

  const navigate = useNavigate();

  // const onUpdateSubmit = async (params: User) => {
  //   await axios.patch(`http://localhost:3010/api/v1/users/${id}`, params);
  //   navigate("/");
  // };

  const label = { inputProps: { "aria-label": "Switch demo" } };
  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
    "&:active": {
      "& .MuiSwitch-thumb": {
        width: 15,
      },
      "& .MuiSwitch-switchBase.Mui-checked": {
        transform: "translateX(9px)",
      },
    },
    "& .MuiSwitch-switchBase": {
      padding: 2,
      "&.Mui-checked": {
        transform: "translateX(12px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(["width"], {
        duration: 200,
      }),
    },
    "& .MuiSwitch-track": {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === "dark"
          ? "rgba(255,255,255,.35)"
          : "rgba(0,0,0,.25)",
      boxSizing: "border-box",
    },
  }));

  return (
    <>
      <Box
        style={{
          width: "60%",
          height: "100vh",
          marginLeft: "100px",
          marginTop: "200px",
        }}
      >
        <Box
          sx={{
            "& > :not(style)": { m: 1, width: "40ch" },
          }}
        >
          <Typography
            style={{
              textAlign: "center",
              border: "2px solid green",
              width: "250px",
              marginLeft: "300px",
              borderRadius: "10px",
              padding: "15px",
              whiteSpace: "nowrap",
              overflow: "scroll",
            }}
            variant="h3"
          >
            ユーザー情報更新
          </Typography>
          <form onSubmit={handleSubmit(onUpdateSubmit)}>
            <div>
              <Stack spacing={3}>
                <label htmlFor="nickname" style={loginTextStyle}>
                  ニックネーム(必須)
                </label>
                <TextField
                  id="nickname"
                  variant="outlined"
                  {...register("nickname")}
                />
                <label htmlFor="password" style={loginTextStyle}>
                  メールアドレス(必須)
                </label>
                <TextField
                  id="email"
                  variant="outlined"
                  {...register("email")}
                />

                <label htmlFor="password" style={loginTextStyle}>
                  パスワード
                </label>
                <TextField
                  id="password"
                  variant="outlined"
                  {...register("password")}
                />
                <TextField
                  id="sex"
                  select
                  label="Select"
                  defaultValue="male"
                  {...register("sex")}
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <Typography>お知らせ通知を受け取る(on/off)</Typography>
                <AntSwitch
                  defaultChecked
                  inputProps={{ "aria-label": "ant design" }}
                  {...register("notification")}
                />
                <Button type="submit" variant="contained">
                  サインイン
                </Button>
              </Stack>
            </div>
          </form>
        </Box>
      </Box>
    </>
  );
};
