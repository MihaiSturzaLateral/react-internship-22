import React from 'react';
import { BrowserRouter, Route,Routes,useLocation} from 'react-router-dom';
import BackBut from '../components/BackBut';
import QuakesDetail from '../components/QuakesDetail';

const Details = () => {

    const location=useLocation();
    return (
 <div>
   
  <BackBut/>
  <label> EarthQuake Details:</label>
  <QuakesDetail urlEarth={location.state.urlEarth}/>
 </div>
    );
};

export default Details;