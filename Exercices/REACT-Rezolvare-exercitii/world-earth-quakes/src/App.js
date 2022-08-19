import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import WorldEarthQuakes from "./pages/worldEarthQuakes/worldEarthQuakes";
import NavBar from "./components/header/navBar";
import Footer from "./components/footer/footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route element={<Home />} path="/" exact></Route>
        <Route element={<About />} path="/about"></Route>
        <Route element={<Contact />} path="/contact"></Route>
        <Route element={<WorldEarthQuakes />} path="/worldEarthQuakes"></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
