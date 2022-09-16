import React from 'react';
import './WeatherCard.css';

const WeatherCard = (props) => {
    return (
        
        <div className='weatherCard'>
            <ul class="list-group">
            <li class="list-group-item"><h2>Location: {props.location}</h2></li>
            <li class="list-group-item"><h3>{props.weather}</h3></li>
            <li class="list-group-item"><h4>Sunrise: {props.sunrise}</h4></li>
            <li class="list-group-item"><h4>Sunset: {props.sunset}</h4></li>
            <li class="list-group-item"><h4>Wind: {props.wind}</h4></li>
            <li class="list-group-item"><h4>Temperature: {props.temp}</h4></li>
            </ul>
        </div>
    )
}

export default WeatherCard;