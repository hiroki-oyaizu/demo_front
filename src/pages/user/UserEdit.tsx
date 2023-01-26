import axios from "axios";
import { FC, useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { User } from "../../types/user/User";
import { Box, Stack } from "@mui/system";
import React from "react";
import { LeftLoginImage } from "../../components/atomic/LeftLoginImage";

import { useForm } from "react-hook-form";
import { TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import bgImage from "../img/logo.png";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { UserEditComponents } from "../../components/user/UserEditComponets";
import { useEditUser } from "../../hooks/user/useEditUser";
export const UserEdit: FC = () => {
  const { editUser, onUpdateSubmit, reset } = useEditUser();

  useEffect(() => {
    editUser();
  }, []);

  return (
    <>
      <UserEditComponents
        onUpdateSubmit={onUpdateSubmit}
        editUser={editUser}
        reset={reset}
      />
    </>
  );
};
