import React, { Component } from 'react';
import { Outlet, Link } from "react-router-dom";
import './Header.css';

const Header = () => {
    const mystyle = {
        color: "darkblue",
        textDecoration: 'none'
    };

        return (
            <>
            <div>
            <ul className='meniu'>
                <li className='home'><Link to="/" style={mystyle}>Home</Link></li>
                <li className='photos'><Link to="/photos" style={mystyle}>Photos</Link></li>
                <li className='comments'><Link to="/comments" style={mystyle}>Comments</Link></li>
            </ul>
            <div class='line'></div>
            </div>
            <Outlet />
            </>
        );
    }

 
export default Header;