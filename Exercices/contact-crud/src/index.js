import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./components/CrudOperations/Create/Create";
import Read from "./components/CrudOperations/Read/Read";
import Update from "./components/CrudOperations/Update/Update";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Create />}></Route>
        <Route path="/Read" element={<Read />}></Route>
        <Route path="/Update" element={<Update />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
