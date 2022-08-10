import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./components/pages/homepage/HomePage";
import Photos from "./components/pages/photos/Photos";
import Comments from "./components/pages/comments/Comments";
import "./index.css";
import "./components/header/Header.css";
import "./components/pages/homepage/HomePage.css";
import "./components/pages/photos/Card.css";
import "./components/pages/comments/CardComments.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="photos" element={<Photos />} />
          <Route path="comments" element={<Comments />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
