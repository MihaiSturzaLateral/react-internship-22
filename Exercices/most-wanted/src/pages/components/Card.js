import React from 'react';
//import { useNavigate } from 'react-router-dom';
import './Card.css';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';

const Card = () => {

    // const navigate=useNavigate();

    // let colorstyle = {
    //     backgroundColor: '#32C100',
    //     borderColor: '#32C100'
    // }
    // if(props.mag >= 2.5) {
    //     colorstyle = {
    //         backgroundColor:'#F3A100',
    //         borderColor: '#F3A100'
    //     }
    // }

    // if(props.mag >= 4.5) {
    //     colorstyle = {
    //         backgroundColor:'red',
    //         borderColor: 'red'
    //     }
    // }


    return (
        <div className='card'>
            
            <div className='profilephoto'><span class="badge badge-danger">ceau</span></div><br/>
            <div className='personalinfo'>
            <ul class="list-group list-group-flush">
            <li class="list-group-item"><div><h2><b>Full Name</b></h2></div></li>
            <li class="list-group-item"> <div><h4><b>Date of birth: </b>23-08-1975</h4></div></li>
            <li class="list-group-item"><div><h4><b>Age: </b>32</h4></div></li>
            <li class="list-group-item"><div><h4><b>Nationalities: </b>RO</h4></div></li>
            <li class="list-group-item"><Button className='moreinfo' variant='outline-secondary'>View more info</Button></li>
            </ul>
            </div>
            
            {/* <img src=></img> */}
            {/* <div className='magnitude' style={colorstyle}>{props.mag}</div>
            <div className='cardTitle'>{props.title}</div>
            <button className='viewDetails' style={colorstyle} onClick={()=>navigate('/details',{state:props.detail})}>View details</button> */}
        </div>
    );
}

export default Card;