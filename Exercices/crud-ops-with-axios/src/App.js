import "./App.css";
import Create from "./pages/create/create";
import Read from "./pages/read/read";
import Update from "./pages/update/update";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <div className="main">
        <h1 className="main-header">React Crud Ops</h1>
        <div>
          <Routes>
            <Route path="/create" element={<Create />} />
            <Route path="/read" element={<Read />} />
            <Route path="/update" element={<Update />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
