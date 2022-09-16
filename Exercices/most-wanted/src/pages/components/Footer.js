import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
        <ul className='subsol'>
        <li className='copyright'>Data Source: Interpol Wanted Lists</li>
        <li className='data'>Red Notices are issued for fugitives wanted either for prosecution or to serve a sentence.
        A Red Notice is a request to <br/>law enforcement worldwide to locale and provisionally arrest
        a person pending extradition, surrender, or similar legal action.</li>
        </ul>
        </div>
    );
}

export default Footer;