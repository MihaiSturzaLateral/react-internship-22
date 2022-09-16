import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from './Card';
import Footer from './Footer';
import './Wanted.css';

const Wanted = () => {
    return(
        <div>
            <div>
                <ul className='filterbuttons'>
                <li><Button variant="danger">Red Notices</Button></li>
                <li><Button variant="warning">Yellow Notices</Button></li>
                </ul>
            </div>
            <div className='cards'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            </div>
        </div>
    )
}

export default Wanted;