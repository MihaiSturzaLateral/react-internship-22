import React from 'react';
import './GetLocation.css';
import {useDispatch,useSelector} from 'react-redux';
import fetchData from './redux/actions';
import { useState } from 'react';
import WeatherCard from './WeatherCard';
import Moment from 'moment';

const GetLocation = () => {

    const [lat,setLatitude]=useState(null);
    const [long,setLong]=useState(null);
    const dt=useSelector(state=>state.data)
    const dispatch=useDispatch();

    const formatSunrise= Moment(dt?.sys?.sunrise).format('LT');
    const formatSunset= Moment(dt?.sys?.sunset).format('LT');

    return (
        <div className='all'>
            <form className='locationForm'>
  <div class="form-group">
    <label for="exampleInputEmail1">Latitude</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter latitude" onChange={(e)=>setLatitude(e.target.value)} />
  </div><br/>
  <div class="form-group">
    <label for="exampleInputPassword1">Longitude</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter longitude" onChange={(e)=>setLong(e.target.value)}/>
  </div><br/>
  <button type="submit" class="btn btn-primary" onClick={(e)=>{
            e.preventDefault();
            if(lat && long)
        dispatch(fetchData(lat,long))}}>Get Location</button>
</form>

{dt&&<WeatherCard location={dt?.name} weather={dt?.weather?.map(item => item.main)} sunrise={formatSunrise} sunset={formatSunset} wind={dt?.wind?.speed} temp={dt?.main?.temp} />}
        </div>
    )
}

export default GetLocation;