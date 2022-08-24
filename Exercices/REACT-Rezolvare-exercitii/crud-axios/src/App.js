import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Contact from "./pages/contact/contact";
import Read from "./pages/read/read";
import Update from "./pages/update/update";
import Delete from "./pages/delete/delete";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Contact />} path="/" exact></Route>
        <Route element={<Read />} path="/read"></Route>
        <Route element={<Update />} path="/update"></Route>
        <Route element={<Delete />} path="/delete" />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
