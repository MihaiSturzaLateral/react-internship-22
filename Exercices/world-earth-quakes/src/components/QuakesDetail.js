import axios from "axios";
import React, { useEffect, useState } from "react";

const QuakesDetail = ({urlEarth}) => {


  const [details, setDetails] = useState('');

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
        setDetails(allDetails);
        return allDetails;
      })
    }catch(error){console.log(error)};
      
    
  };
  

  return (
    <div>
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
        <label><br/>{details.time}</label>
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
    <div className="magnitude"  >
       <label>Magnitude: </label>
       <label>{details.mag}</label>
      </div>
      

      </div>
  );
 
  }


export default QuakesDetail;
