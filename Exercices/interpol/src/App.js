import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Check from "./pages/Check";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MyReports from "./pages/MyReports";
import Update from "./pages/Update";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/details" element={<Details />} />
        <Route path="/check" element={<Check />} />
        <Route path="/myReports" element={<MyReports />} />
        <Route path="/update" element={<Update />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
