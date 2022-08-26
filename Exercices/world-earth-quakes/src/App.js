import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';
import ContactPage from './pages/Contact/ContactPage';
import EarthQuakeDetailsPage from './pages/EarthquakeDetails/EarthQuakeDetailsPage';
import Navbar from './shared/Navbar/Navbar';
import Footer from './shared/Footer/Footer';
import MessagesPage from './pages/Contact/MessagesPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/earthquake-details/:id" element={<EarthQuakeDetailsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/messages-list" element={<MessagesPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
