import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';

const Contact = () => {
    return (
        <div>
            <h1 className='contacttitle'>Contact</h1>
            {/* <h2 className='sendus'>Send us a message!</h2> */}
            <Form />
            <Footer />
        </div>
    );
}

export default Contact;