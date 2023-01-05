import { Box, Stack } from "@mui/system";
import React from "react";
import { FC } from "react";
import { LeftLoginImage } from "../../components/atomic/LeftLoginImage";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import bgImage from "../img/logo.png";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { SignInComponents } from "../../components/login/SignInComponets";

export const Signin: FC = () => {
  return (
    <>
      <Box style={{ display: "flex" }}>
        <LeftLoginImage />
        <SignInComponents />
      </Box>
    </>
  );
};
