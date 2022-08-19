import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Poza from './Poza.jpg';
import './About.css';

const About = () => {
    return(
        <div>
            <h1 className='pageTitle'>About</h1>
            <div className='profile'>
            <img src={Poza} className='poza' height={220} width={220} />
            <ul className='details'>
                <li className='nume'>Name: Mangra Vivianne</li>
                <br />
                <li className='age'>Age: 20</li>
                <br />
                <li className='email'>Email: vivianne.mangra@gmail.com</li>
            </ul>
            </div>
            <Footer />
            
        </div>
    );
}

export default About;