import axios from "axios";
import React, { useEffect, useState } from "react";
import MapComponent from "../MapComponent/MapComponent";

const QuakesDetail = ({urlEarth}) => {


  const [details, setDetails] = useState('');
  const [rawData,setrawData]=useState();

  useEffect(() => {
    getAllDetails(`${urlEarth}`)
  },[]);

  const getAllDetails = (urlEarth) => {
    try {axios
      .get(`${urlEarth}`)
      .then((res) => {
        console.log('urlEarth   ',`${urlEarth}`)
        let allDetails = res.data.properties;
        console.log('this is alldetails ',allDetails)
        setrawData(res.data);
        setDetails(allDetails);
        return allDetails;
      })
    }catch(error){console.log(error)};
      
    
  };
  
  const backgroundChange = () => {
    if(details.mag>='4.5') return "#ff0000";
    else if(details.mag<='4.5'&& details.mag>'2.5') return "#FFA500"
    else if(details.mag<=2.5&& details.mag>'1.0') return "#00D100"
 };

  return (
    <div className="quakes-mag">
    <div className="quakes-detail">
     {console.log("FRom QUAKESDETAILS: ",{urlEarth})}
     {/* {getAllDetails(`${urlEarth}`)} */}
      <div className="details">
        <label className='title'>Title:</label>
        <label><br/>{details.title}</label>
      </div>
      <div className="details">
        <label className='title'>Place:</label>
        <label><br/>{details.place}</label>
      </div>
      <div className="details">
        <label className='title'>Time:</label>
        <label><br/>{new Date(details.time).toLocaleString()}</label>
      </div>
      <div className="details">
        <label className='title'>Status:</label>
        <label><br/>{details.status}</label>
      </div>
      <div className="details">
        <label className='title'>Tsunami Risk:</label>
        <label><br/>{details.tsunami}</label>
      </div>
      </div>
    {/* style={`{{backgroundColor: ${}}}`} */}
    <div className="magnitude" style={{backgroundColor: `${backgroundChange()}`}} >
       <label>Magnitude: </label>
       <label>{details.mag}</label>
        <MapComponent earthquakes={rawData} width={400}/> 
       </div>
       
       </div>
      

      
  );
 
  }


export default QuakesDetail;
