import './App.css';
import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Layout from './Components/Layout/Layout';
import HomePage from './Pages/HomePage/HomePage';
import AboutPage from './Pages/AboutPage/AboutPage';
import ContactPage from './Pages/ContactPage/ContactPage';
import DetailsPage from './Pages/DetailsPage/DetailsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='AboutPage' element={<AboutPage/>}/>
          <Route path="ContactPage" element={<ContactPage/>}/>
          <Route path="DetailsPage" element={<DetailsPage/>}/>
        </Route>  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
