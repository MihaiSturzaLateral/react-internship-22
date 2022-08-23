import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './pages/components/Header';
import Footer from './pages/components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Time from './pages/components/Time';
import Home from './pages/Home';
import Details from './pages/Details'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="details" element={<Details />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter> 
    </div>
  );
}

export default App;
