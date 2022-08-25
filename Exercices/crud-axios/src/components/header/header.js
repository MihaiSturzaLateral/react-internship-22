import React from 'react';
import Button from 'react-bootstrap/Button';
import { Outlet, Link } from "react-router-dom";
import './header.css';

const Header = () => {

    const mystyle = {
        color: "white",
        textDecoration: 'none'
    };

    return (
        <>
    <nav>
         <h1 className='title'>CRUD Operations with Axios</h1>
        <ul className='meniu'>
            <li className='home'><Link to="/" style={mystyle}><Button variant="outline-success">Create</Button>{' '}</Link></li>
            <li><Link to="/read" style={mystyle}><Button variant="outline-success">Read</Button>{' '}</Link></li>
        </ul>
    </nav>
    <Outlet />
    </>
    );
}

export default Header;