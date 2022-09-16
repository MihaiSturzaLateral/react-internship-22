import React from 'react';
import './Details.css';
import Footer from './components/Footer';
import Poza from '../Poza.JPG';


const Details = () => {
    return(
        <div>
            <div className='detailsPage'>
            <div className='detailsbadge'><span class="badge badge-danger">Red Notice on: Full Name</span></div><br/><br/><br/>
            <div className='details'>
            <ul class="list-group">
            <li class="list-group-item"><b>Eyes color: </b>Brown</li>
            <li class="list-group-item"><b>Weight: </b>118 kg</li>
            <li class="list-group-item"><b>Height: </b>187 cm</li>
            <li class="list-group-item"><b>Date of birth: </b>23-08-1975</li>
            <li class="list-group-item"><b>Sex: </b>Male</li>
            <li class="list-group-item"><b>Place of birth: </b>Romania</li>
            <li class="list-group-item"><b>Nationalities: </b>Ro</li>
            </ul>
            </div>
            <div className='detailPhoto'></div>
            <div className='detailsbadge'><span class="badge badge-danger">Arrest warrants: </span></div><br/><br/><br/>
            <div className='arrest'>
            <ul class="list-group">
            <li class="list-group-item"><b>Issuing country: </b>Romania</li>
            <li class="list-group-item"><b>Charge with: </b>...</li>
            </ul>
            </div>
            </div>
            
            <Footer />
        </div>
    )
}

export default Details;