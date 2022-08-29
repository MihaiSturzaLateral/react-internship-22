import { Routes, Route } from "react-router-dom";
import "./App.css";
import Form from "./pages/Form";
import Home from "./pages/Home/Home";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import EQDetails from "./pages/Home/ComponentsHome/EQDetails";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Form />} />
        <Route
          // path="./pages/Home/ComponentsHome/EQDetails"
          path="/details"
          element={<EQDetails />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
