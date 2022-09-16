import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./components/pages/details/Details";
import Home from "./components/pages/home/Home";
import CheckTool from "./components/pages/check_tool/checkTool";
import MyReports from "./components/pages/my_reports/myReports";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Update from "../src/components/pages/my_reports/Update";
import "./components/footer/Footer.css";
import "./components/header/Header.css";
import store from "./components/redux/store";
import { Provider } from "react-redux";
import "./App.css";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<Home />} />
              <Route path="/Details" element={<Details />} />
              <Route path="/checkTool" element={<CheckTool />} />
              <Route path="/myReports" element={<MyReports />} />
              <Route path="/Update" element={<Update />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <Footer />
      </Provider>
    </>
  );
}
