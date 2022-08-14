import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import CommentsPage from './pages/Comments/CommentsPage';
import HomePage from './pages/Home/HomePage';
import PhotosPage from './pages/Photos/PhotosPage';
import Navbar from './shared/Navigation/Navbar';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/Home' element={<HomePage />} />
        <Route path='/Photos' element={<PhotosPage />} />
        <Route path='/Comments' element={<CommentsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
