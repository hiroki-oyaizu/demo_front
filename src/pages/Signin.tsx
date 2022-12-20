import { Box } from "@mui/system";
import React from "react";
import { FC } from "react";
import { LeftLoginImage } from "../components/LeftLoginImage";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Typography } from "@mui/material";

export const Signin: FC = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  const onSubmit = (data: any) => console.log(data);
  return (
    <>
      <Box style={{ display: "flex" }}>
        <LeftLoginImage />

        <Box style={{ width: "60%", height: "100vh" }}>
          <Typography variant="h3">サインイン</Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="email">Email</label>
              <input id="email" {...register("email")} />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input id="password" {...register("password")} type="password" />
            </div>
            <button type="submit">ログイン</button>
          </form>
        </Box>
      </Box>
    </>
  );
};
