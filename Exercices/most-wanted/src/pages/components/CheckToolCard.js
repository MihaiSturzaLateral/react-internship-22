import React from 'react';
//import { useNavigate } from 'react-router-dom';
import './CheckToolCard.css';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';

const CheckToolCard = () => {

    return (
        <div className='checkcard'>
            
            <div className='checkprofilephoto'><span class="badge badge-danger">ceau</span></div>
            <div className='checkpersonalinfo'>
            <ul class="list-group list-group-flush">
            <li class="list-group-item"><div><h2><b>Full Name</b></h2></div></li>
            <li class="list-group-item"> <div><h4><b>Date of birth: </b>23-08-1975</h4></div></li>
            <li class="list-group-item"><div><h4><b>Age: </b>32</h4></div></li>
            <li class="list-group-item"><div><h4><b>Nationalities: </b>RO</h4></div></li>
            </ul>
            <Button className='checkmoreinfo' variant='outline-secondary'>View more info</Button>
            </div>
            
            {/* <img src=></img> */}
            {/* <div className='magnitude' style={colorstyle}>{props.mag}</div>
            <div className='cardTitle'>{props.title}</div>
            <button className='viewDetails' style={colorstyle} onClick={()=>navigate('/details',{state:props.detail})}>View details</button> */}
        </div>
    );
}

export default CheckToolCard;