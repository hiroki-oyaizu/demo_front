import axios from "axios";
import { FC, useCallback } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { User } from "../../types/user/User";

export const useEditUser = () => {
  const defaultUser = {
    nickname: "aaaa",
    email: "",
    password: "",
    sex: "",
    notification: false,
  };

  const navigate = useNavigate();
  const { reset } = useForm({
    mode: "onBlur",
    defaultValues: {
      nickname: defaultUser.nickname,
      email: defaultUser.email,
      password: defaultUser.password,
      sex: defaultUser.sex,
      notification: defaultUser.notification,
    },
  });
  const { id } = useParams<{ id: string }>();
  console.log(id);
  const editUser = useCallback(async () => {
    try {
      const res = await axios.get<User>(
        `http://localhost:3010/api/v1/users/${id}`
      );
      if (res.status === 200 && res.data) {
        reset({
          nickname: res.data.nickname,
          email: res.data.email,
          password: res.data.password,
          sex: res.data.sex,
          notification: res.data.notification,
        });
      }
    } catch (error: any) {
      console.log("error");
    }
  }, []);

  const onUpdateSubmit = async (params: User) => {
    await axios.patch(`http://localhost:3010/api/v1/users/${id}`, params);
    navigate("/");
  };

  return { editUser, onUpdateSubmit, reset };
};
