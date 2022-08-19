import React from "react";
import ListQuakes from "./components/listQuakes/listQuakes";
import MapComponent from "./components/MapComponent/MapComponent";
import TestData from "./components/MapComponent/TestData";

export default function Home() {
  // timeFrame  "hour", "day", "week"
  // mag = "all", "1.0", "2.5", "4.5"
  // const [timeFrame, setTimeFrame] = useState([]);
  // const [mag, setMag] = useState([]);
  // .......   /${mag}_${timeFrm}
  //const types = ["Past Hour", "Past Day", "Past 7 Days", "Past 30 Days"];
  return (
    <div>
      <h1>Home Page</h1>
      <MapComponent earthquakes={TestData} height={500} />
      <ListQuakes />
    </div>
  );
}
