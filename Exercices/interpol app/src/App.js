import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CheckTools from "./pages/CheckTools";
import MyReports from "./pages/MyReports";
import ReportDet from "./pages/ReportDet";
import Footer from "./components/Footer";
import Edit from "./pages/Edit";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/check" element={<CheckTools />} />
        <Route path="/reports" element={<MyReports />} />
        <Route path="/details" element={<ReportDet />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
