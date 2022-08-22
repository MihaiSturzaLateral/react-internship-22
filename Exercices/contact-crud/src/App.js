import "./App.css";
import Form from "./components/Form";
import Read from "./components/Read";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Update from "./components/Update";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Contact form CRUD operations</h1>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/read" element={<Read />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
