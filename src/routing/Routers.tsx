import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import App from '../App'
import { MusicIndex } from '../components/MusicIndex'
export const Routers = () => {
  return (
    <>
      <Routes>
        <Route index element={<App />} />
        <Route path="/test" element={<MusicIndex />} />
      </Routes>
    </>
  )
}
