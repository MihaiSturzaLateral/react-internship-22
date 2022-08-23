import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ListCard.css';

const ListCard = (props) => {

    const navigate=useNavigate();

    let colorstyle = {
        backgroundColor: '#32C100',
        borderColor: '#32C100'
    }
    if(props.mag >= 2.5) {
        colorstyle = {
            backgroundColor:'#F3A100',
            borderColor: '#F3A100'
        }
    }

    if(props.mag >= 4.5) {
        colorstyle = {
            backgroundColor:'red',
            borderColor: 'red'
        }
    }


    return (
        <div className='card'>
            <div className='magnitude' style={colorstyle}>{props.mag}</div>
            <div className='cardTitle'>{props.title}</div>
            <button className='viewDetails' style={colorstyle} onClick={()=>navigate('/details',{state:props.detail})}>View details</button>
        </div>
    );
}

export default ListCard;