import React from 'react'
import './Footer.css'

const Footer=()=>{
    return(
        <footer className='footer'>
            <ul className='ulFooter'>
                <li className='firstli'>
                @Copyright 2022 - Muscas Maria
                </li>
                <li className='secondli'>
                DATA Source: The USGS Earthquake Hazards
                Program of the U.S. Geological Survey (USGS),
                part of the National Earthquake Hazards Reduction
                (NEHRP) led by the National Institute of 
                Standards and Technology (NIST).
                </li>
            </ul>
        </footer>
    )
}
export default Footer;