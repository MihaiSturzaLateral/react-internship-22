import { BrowserRouter, Route,Routes} from 'react-router-dom';

import './App.css';
import Header from "./components/Header"
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Details from './pages/Details';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Footer/>
    </div>
  <Routes>
    <Route path="/" element={<Home/>} exact /> 
    <Route path="/about" element={<About/>} /> 
    <Route path="/contact" element={<Contact/>} />
    <Route path="/details" element={<Details/>}/>
    </Routes>

   
      </BrowserRouter>
  );
}

export default App;
