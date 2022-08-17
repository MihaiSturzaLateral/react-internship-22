import { getMouseEventOptions } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useState } from "react";
import EarthQuakes from "../components/EarthQuakes";
import useEarthSearch from "../components/useEarthSearch";
import ButtonsGroup from "../components/ButtonsGroup";
import axios from "axios";
import MapComponent from "../MapComponent/MapComponent";
import DropDown from "../components/DropDown";


const info = [
  { label: "Any", paragraph: "any" },
  { label: "4.5+", paragraph: "4.5" },
  { label: "2.5+", paragraph: "2.5" },
  { label: "1+", paragraph: "1" },
];



const Home = () => {
  const [button, setButton] = useState("");
  const sendData = (active) => {
    if (active) {
      setButton(active);
      console.log("From home js: ", active);
      
      return active;
    }
  };

  const [drop, setDrop]=useState("")

  const sendValue=(value)=>{
    if(value){
      setDrop(value);
      console.log("from drop down ", value);
      return value;
    }
  }
  const [placee, setPlace] = useState("");
  const [rawData,setRawData]=useState();

  useEffect(() => {
    getAllPlaces();
  },[button]);

  const getAllPlaces = (url) => {
    try {axios
      .get(`${url}`)
      .then((res) => {
        let allPlaces = res.data.features.map((arr,key) => arr.properties);
        console.log('this is allplaces ',allPlaces)
        setPlace(allPlaces);
        setRawData(res.data);
        return allPlaces;
      })
    }catch(error){console.log(error)};
      
    
  };

  const switchButtons = (param) => {
    switch (param) {
      case "Past Hour":
        if(drop==='any')
         getAllPlaces(
          'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson'
        );
        else {
          const str='https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson' 
          const res=str.replace('all',drop)
          getAllPlaces(res)}
        break;
      case "Past Day":
        if(drop==='any')
        getAllPlaces(
         'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson'
       );
       else {
         const str='https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson' 
         const res=str.replace('all',drop)
         getAllPlaces(res)}
       break;
      case "Past 7 Days":
        if(drop==='any')
         getAllPlaces(
          'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson'
        );
        else {
          const str='https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson' 
          const res=str.replace('all',drop)
          getAllPlaces(res)}
        break;
      case "Past 30 Days":
        if(drop==='any')
         getAllPlaces(
          'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson'
        );
        else {
          const str='https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson' 
          const res=str.replace('all',drop)
          getAllPlaces(res)}
        break;
      default:
        return ;
    }
  };
  useEffect(() => {
    switchButtons(button)
  },[drop]);

 console.log(placee);

  return (
    <>
    <div className="buttons">
      <ButtonsGroup sendData={sendData} />
      <DropDown sendValue={sendValue}/>
      {console.log(button)}
      {/* {switchButtons(button)} */}
        <div className="list-quakes">  {Array.isArray(placee)?placee.map(obj =>(<EarthQuakes labelEarth={obj.mag} paragraphEarth={obj.place} urlEarth={obj.detail}/>)): null } </div>
      
        </div>
       <MapComponent earthquakes={rawData}/>
       </>
  );
};

export default Home;
