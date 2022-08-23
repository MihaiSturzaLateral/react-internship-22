import React from 'react';
import Time from './components/Time';
import Footer from './components/Footer';
import MapComponent from './components/MapComponent/MapComponent';
import TestData from './components/MapComponent/TestData.json';

const Home = () => {

    return (
        <div>
            <Time/>
            {/* <MapComponent earthquakes={TestData} width={500}/> */}
            <Footer/>
        </div>
    );
}

export default Home;