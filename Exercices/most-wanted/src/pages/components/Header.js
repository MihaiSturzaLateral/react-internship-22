import React from 'react';
//import { Outlet, Link } from "react-router-dom";
import './Header.css';
import Button from 'react-bootstrap/Button';

const Header = () => {

    const mystyle = {
        color: "white",
        textDecoration: 'none'
    };

    return (
        <>
    <div>
         <h1 className='title'>Most Wanted</h1>
        <ul className='meniu'>
            <li className='home'>Home</li>
            <li>Check Tool</li>
            <li className='reportstitle'>My reports</li>
            <li className='submittitle'><Button variant="outline-danger">Submit Report</Button>{' '}</li>
        </ul>
        
    </div>
    </>
    );
}

export default Header;