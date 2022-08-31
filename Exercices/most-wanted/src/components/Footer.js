import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
        <ul className='subsol'>
        <li className='copyright'>@Copyright 2022 - Mangra Vivianne</li>
        <li className='data'>DATA Source - The USGS Earthquake Hazards Program of the U.S. Geological Survey<br/>
        (USGS), part of the National Earthquake Hazards Reduction Program (NEHRP) led by<br/>
        the National Institute of Standards and Technology (NIST).</li>
        </ul>
        </div>
    );
}

export default Footer;