import React, { useState,useEffect} from 'react';
import Title from '../../Components/Title/Title';
import { useNavigate,useLocation} from 'react-router-dom'; 
import './DetailsPage.css'
import Card from '../../Components/Card/Card';
import MapComponent from '../../Components/MapComponent/MapComponent';


const DetailsPage=()=>{
    const navigate=useNavigate();
    const location=useLocation();
    const url=location.state;
    const [data,setData]=useState([]);
    const fetchData=async()=>{
        const result=await fetch(url);
        const response=await result.json();
        setData(response); 

    }
    useEffect(()=>{fetchData()},[]);
    return(
        <>
        <div className='header'>
            <button className='backBtn' onClick={()=>navigate('/')}>Go back</button>
            <Title text='EarthQuake Details:'/>
        </div>
        <div className='container'>
            <div className='containerCard'>
              <Card title={data?.properties?.title} place={data?.properties?.place}  time={data?.properties?.time} status={data?.properties?.status} tsunami={data?.properties?.tsunami}/>
            </div>
            <div className='container2'>
                <div className='divMagnitude'>
                    {`Magnitude: ${data?.properties?.mag}`}
                </div>
                <div className='map2'>
                       {data&& <MapComponent earthquakes={data} height={310}/>}
                </div>
            </div>
            
        </div>
        </>
    )
}
export default DetailsPage;