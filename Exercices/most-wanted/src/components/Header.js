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
    <nav>
         <h1 className='title'>MostWanted</h1>
        <ul className='meniu'>
            <li className='home'>Home</li>
            <li>Check Tool</li>
            <li class='reports'>My reports</li>
        </ul>
    </nav>
    </>
    );
}

export default Header;