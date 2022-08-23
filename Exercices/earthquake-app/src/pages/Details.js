import React, {useState} from 'react';
import LabelValue from './components/LabelValue';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from "axios";
import './Details.css';
import MapComponent from './components/MapComponent/MapComponent';
import {Link} from "react-router-dom";
import Moment from 'moment';

const Details = () => {

    const navigate=useNavigate();
    const location=useLocation();
    const url=location.state;
    const[post,setPost]=useState();

    React.useEffect(() => {
        axios.get(url).then((response) => {
          setPost(response.data);
        });
      }, [url]);
    
      if (!post) return <div>Loading...</div>;

      let colorstyle = {
        backgroundColor: '#32C100',
        borderColor: '#32C100'
    }
    if(post.properties.mag >= 2.5) {
        colorstyle = {
            backgroundColor:'#F3A100',
            borderColor: '#F3A100'
        }
    }

    if(post.properties.mag >= 4.5) {
        colorstyle = {
            backgroundColor:'red',
            borderColor: 'red'
        }
    }


    const mystyle = {
        color: "white",
        textDecoration: 'none'
    };

    const formatDate= Moment(post.properties.time).format('DD-MM-YYYY');

    return (
        <div>
            <button className='back'><Link to="/" style={mystyle}>Go back</Link></button>
            <h1 className='titleDetails'>Earthquake Details: </h1>
            <h1 className='magnitudeDetails' style={colorstyle}>Magnitude: {post.properties.mag}</h1>
        <div className='detailsCards'>
            <LabelValue label='Title: ' value={post.properties.title} />
            <LabelValue label='Place: ' value={post.properties.place} />
            <LabelValue label='Time: ' value={formatDate} />
            <LabelValue label='Status: ' value={post.properties.status} />
            <LabelValue label='Tsunami risk: ' value={post.properties.tsunami} />
        </div>
        <div className='hartaDetails'>
            <MapComponent earthquakes={post} width={500} />
        </div>
        </div>
    );
}

export default Details;