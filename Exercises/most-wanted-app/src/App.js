import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyReportsPage from "./Pages/MyReportsPage/MyReportsPage";
import HomePage from "./Pages/HomePage/HomePage";
import ReportDetailsPage from "./Pages/ReportDetailsPage/ReportDetailsPage";
import Footer from "./Components/Footer";
import CheckToolPageFormik from "./Pages/CheckToolPageFormik/CheckToolPageFormik";
import ModalPageFormik from "./Pages/ModalPageFormik/ModalPageFormik";

function App() {
  return (
    <BrowserRouter>
      {/* <Footer/> */}
      <Routes>
        <Route path="/" element={<NavbarComp />}>
          <Route index element={<HomePage />} />
          <Route path="checktoolpage" element={<CheckToolPageFormik/>}/>
          <Route path="myreportspage" element={<MyReportsPage />} />
          <Route path="mydetailspage" element={<ReportDetailsPage />} />
          <Route path="modalpageformik" element={<ModalPageFormik closeModal='true'/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
