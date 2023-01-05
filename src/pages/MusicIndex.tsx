import { Button, Input } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

type Props = {
  instrument_name: string;
  price: number;
};
export const MusicIndex = () => {
  const [inCompleteTodo, setInCompleteTodo] = useState<Array<string>>([]);
  const [inputValue, setInputValue] = useState("");
  const [completeTodo, setIncompleteTodo] = useState<Array<string>>([]);

  const onChangeVale = (e: any) => {
    setInputValue(e.target.value);
  };

  const onClickAddTodo = () => {
    const todo = [...inCompleteTodo, inputValue];
    setInCompleteTodo(todo);
    setInputValue("");
  };

  const onClickCompleteTodo = (index: any) => {
    const todo = [...inCompleteTodo];
    todo.splice(index, 1);
    setInCompleteTodo(todo);
    const compTodo = [...completeTodo, inCompleteTodo[index]];

    setIncompleteTodo(compTodo);
  };
  return (
    <>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <h2>TODO管理</h2>
        <div style={{ height: "300px", backgroundColor: "#C0C0C0" }}>
          <Input
            style={{ outline: "solid 3px blue" }}
            value={inputValue}
            onChange={onChangeVale}
          />
          <div>
            <Button onClick={onClickAddTodo}>登録</Button>
          </div>
        </div>
        <div style={{ height: "300px", backgroundColor: "yellow" }}>
          <h2>未完了のTODO</h2>
          {inCompleteTodo.map((todo, index) => {
            return (
              <div key={todo}>
                <p>{todo}</p>
                <Button onClick={() => onClickCompleteTodo(index)}>完了</Button>
                <Button>削除</Button>
              </div>
            );
          })}
        </div>
        <div style={{ height: "300px", backgroundColor: "green" }}>
          <>
            <h2>完了のTODO</h2>
            {completeTodo.map((todo) => {
              return (
                <div key={todo}>
                  <p>{todo}</p>
                  <Button>戻す</Button>
                </div>
              );
            })}
          </>
        </div>
      </div>
    </>
  );
};
