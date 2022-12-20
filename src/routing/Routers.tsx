import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import { MusicIndex } from "../pages/MusicIndex";
import { Signin } from "../pages/Signin";
export const Routers = () => {
  return (
    <>
      <Routes>
        <Route index element={<App />} />
        <Route path="/music" element={<MusicIndex />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </>
  );
};
