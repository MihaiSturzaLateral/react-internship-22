import "./App.css";
import Contact from "./pages/Contact/Contact";
import ContactList from "./pages/ContactList/ContactList";
import { Routes, Route } from "react-router-dom";
import UpdateContactList from "./pages/ContactList/UpdateContactList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Contact />}></Route>
        <Route
          path="/pages/ContactList/ContactList"
          element={<ContactList />}
        ></Route>
        <Route
          path="./pages/ContactList/ContactList"
          element={<ContactList />}
        />
        <Route
          path="/pages/ContactList/UpdateContactList"
          element={<UpdateContactList />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
