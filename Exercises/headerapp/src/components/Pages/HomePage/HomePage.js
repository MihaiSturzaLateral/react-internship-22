import { getDefaultNormalizer } from "@testing-library/react";
import React,{useEffect,useState} from "react";
import {useNavigate} from 'react-router-dom';
import './HomePage.css';

const url1="https://api.unsplash.com/search/photos?query=coffee&per_page=20&client_id=gK52De2Tm_dL5o1IXKa9FROBAJ-LIYqR41xBdlg3X2k";

function HomePage(){
    const [data,setData]=useState([]);
    const navigate=useNavigate();

    const getData=async()=>{
        const response=await fetch(url1);
        const dt=await response.json();
        const v=dt.results.map(el=>el.urls.thumb);
        //console.log(v);
        setData(v[3]);
    }
    
    useEffect(()=>{getData()},[]);
    
    
    return(
        <>
        
            <div style={{
                backgroundImage: `url(${data})`,
                backgroundSize:'cover',
                backgroundRepeat:'no-repeat',
                position:'fixed',
                minWidth:'100%',
                minHeight:'100%',
                textAlign:'center'
            }}>
                <h1 id='titleFirstPage'>{'Hello, Maria!'}</h1>
                <button className="btn" onClick={()=>navigate('/PhotosPage')}>
                    Go to Photos
                </button>
            </div> 
        </>
    )
}
export default HomePage;