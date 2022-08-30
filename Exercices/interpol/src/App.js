import './App.css';
 import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Header/>
     <Footer/>
    </div>
    <Routes>
      <Route path="/" element={<Home/>} exact/>
      <Route path="/details" element={<Details/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
