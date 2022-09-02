import './App.css';
 import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import Check from './pages/Check'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <BrowserRouter>
    
     <Header/>

   
    <Routes>
      <Route path="/" element={<Home/>} exact/>
      <Route path="/details" element={<Details/>}/>
      <Route path="/check" element={<Check/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;