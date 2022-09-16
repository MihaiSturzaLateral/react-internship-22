import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './pages/components/Header';
import Details from './pages/Details';
import Wanted from './pages/components/Wanted';
import CheckTool from './pages/components/CheckTool';
import Footer from './pages/components/Footer';
import Modal from './pages/components/Modal';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    {/* <Details /> */}
    {/* <Wanted /> */}
    {/* <CheckTool /> */}
    {/* <Modal /> */}
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
