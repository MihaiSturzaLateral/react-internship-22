import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/HomePage/Home";
import CheckTool from "./pages/CheckToolPage/CheckTool";
import MyReports from "./pages/MyReportsPage/MyReports";
import Details from "./pages/DetailsPage/Details";
import Update from "./pages/Update/Update";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <div>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/checktool" element={<CheckTool />} />
            <Route path="/myreports" element={<MyReports />} />
            <Route path="/details" element={<Details />} />
            <Route path="/update:id" element={<Update />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
