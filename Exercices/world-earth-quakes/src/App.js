import "./App.css";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/pages/About/About" element={<About />}></Route>
          <Route path="/pages/Contact/Contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
