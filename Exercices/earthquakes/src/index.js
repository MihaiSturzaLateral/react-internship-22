import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Contact from "./components/pages/contact/Contact";
import Footer from "./components/footer/Footer";
import "./index.css";
import "./components/header/Header.css";
import "./components/footer/Footer.css";
import "./components/pages/about/About.css";
import "./components/pages/contact/Contact.css";
import "./components/pages/home/Home.css";
import DetailsPage from "./components/DetailsPage/DetailsPage";
import ListComponent from "./components/ListComponent/ListComponent";
import "./components/DetailsPage/DetailsPage.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route index element={ListComponent} />
            <Route path="/DetailsPage" element={<DetailsPage />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
