import "./App.css";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import CheckTool from "./pages/CheckTool/CheckTool";
import MyReports from "./pages/MyReports/MyReports";
import Details from "./components/Details";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/pages/CheckTool/CheckTool" element={<CheckTool />}></Route>
      <Route path="/pages/MyReports/MyReports" element={<MyReports />}></Route>
      <Route path="/components/Details" element={<Details />}></Route>
    </Routes>
  );
}

export default App;
