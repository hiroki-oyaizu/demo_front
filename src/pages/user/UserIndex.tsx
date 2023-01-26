import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { TextField, Typography } from "@mui/material";
import { User } from "../../types/user/User";

export const UserIndex: FC = () => {
  const { id } = useParams();
  const [allUsers, setAllUsers] = useState<Array<User>>([]);

  const fetchUser = async () => {
    const res = await axios.get<Array<User>>(
      "http://localhost:3010/api/v1/users"
    );
    setAllUsers(res.data);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <h3>ユーザー情報編集ページ</h3>
      <h3>{id}</h3>
      {allUsers.map((user) => {
        return (
          <div key={user.id}>
            <Typography>名前</Typography>
            <p>{user.nickname}</p>
            <Link
              to={`edit_user/${user.id}`}
            >{`ユーザー情報編集者の名前${user.nickname}`}</Link>
          </div>
        );
      })}
    </>
  );
};
