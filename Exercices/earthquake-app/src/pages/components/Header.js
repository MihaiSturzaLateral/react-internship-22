import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './Header.css';

const Header = () => {

    const mystyle = {
        color: "white",
        textDecoration: 'none'
    };

    return (
        <>
    <nav>
         <h1 className='title'>WorldEarthquakes</h1>
        <ul className='meniu'>
            <li className='home'><Link to="/" style={mystyle}>Home</Link></li>
            <li><Link to="/about" style={mystyle}>About</Link></li>
            <li><Link to="/contact" style={mystyle}>Contact</Link></li>
        </ul>
    </nav>
    <Outlet />
    </>
    );
}

export default Header;