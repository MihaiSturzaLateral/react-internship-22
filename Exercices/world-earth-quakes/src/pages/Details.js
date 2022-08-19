import React from 'react';
import { BrowserRouter, Route,Routes,useLocation} from 'react-router-dom';
import BackBut from '../components/BackBut';
import QuakesDetail from '../components/QuakesDetail';
import MapComponent from "../MapComponent/MapComponent";

const Details = () => {

    const location=useLocation();
    return (
 <div className='details-elements'>
   
  <BackBut/>
  <label className='title-details'> EarthQuake Details:</label>
  <QuakesDetail urlEarth={location.state.urlEarth}/>
 </div>
    );
};

export default Details;