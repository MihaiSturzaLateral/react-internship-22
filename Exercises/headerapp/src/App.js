import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/Pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import CommentsPage from "./components/Pages/CommentsPage/CommentsPage";
import PhotoPages from "./components/Pages/PhototsPage/PhotosPage";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="PhotosPage" element={< PhotoPages/>} />
          <Route path="CommentsPage" element={<CommentsPage/>} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
