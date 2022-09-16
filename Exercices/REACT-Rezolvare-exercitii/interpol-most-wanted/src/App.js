import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./pages/home/Home";
import CheckTool from "./pages/checkTool/CheckTool";
import Details from "./pages/details/Details";
import MyReports from "./pages/myReports/myReports";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Home />} path="/" exact></Route>
        <Route element={<CheckTool />} path="/checkTool"></Route>
        <Route element={<Details />} path="/details"></Route>
        <Route element={<MyReports />} path="/myReports"></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
