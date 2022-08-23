import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/HomePage/Home";
import About from "./pages/AboutPage/About";
import Contact from "./pages/ContactPage/Contact";
import Footer from "./components/Footer/Footer";
import Details from "./pages/DetailsPage/Details";

const App = () => {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
