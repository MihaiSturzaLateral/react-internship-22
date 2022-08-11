import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Photos from "./pages/PhotosPage/Photos";
import Comments from "./pages/CommentsPage/Comments";
import Header from "./components/header/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="Photos" element={<Photos />} />
          <Route path="Comments" element={<Comments />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
