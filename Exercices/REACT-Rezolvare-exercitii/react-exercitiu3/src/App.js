import "./App.css";
import Home from "./pages/HomePage/home";
import Photo from "./pages/PhotosPage/photo";
import Comment from "./pages/CommentsPage/comments";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photosPage" element={<Photo />} />
        <Route path="/commentsPage" element={<Comment />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
