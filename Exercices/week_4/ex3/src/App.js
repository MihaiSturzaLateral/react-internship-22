import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Photos from "./pages/Photos/Photos";
import Comments from "./pages/Comments/Comments";
import Name from "./toFunctionComponent";

function App() {
  return (
    <>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/pages/Photos/Photos" element={<Photos />}></Route>
          <Route path="/pages/Comments/Comments" element={<Comments />}></Route>
        </Routes>
      </div>
      {/* <Name /> */}
    </>
  );
}

export default App;
