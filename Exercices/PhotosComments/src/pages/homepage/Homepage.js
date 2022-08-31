import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';


const Homepage = () => {
    const mystyle = {
        color: "white",
        textDecoration: 'none'
    };

    return (
        <div>
            <h1>Hello Vivianne!</h1>
            <h2><Link to="/photos" style={mystyle}>Explore Photos</Link></h2>
        </div>
    );
}

export default Homepage;