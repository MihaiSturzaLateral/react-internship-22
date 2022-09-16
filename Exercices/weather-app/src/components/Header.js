import React from 'react';
//import { Outlet, Link } from "react-router-dom";
import './Header.css';

const Header = () => {

    const mystyle = {
        color: "white",
        textDecoration: 'none'
    };

    return (
        <>
    <div>
         <h1 className='title'>WeatherNOW</h1>
        
    </div>
    </>
    );
}

export default Header;