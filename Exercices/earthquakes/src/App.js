import "./App.css";
import MapComponent from "./components/MapComponent/MapComponent";
import TestData from "./components/MapComponent/TestData";

function App() {
  return (
    <div className="App">
      {/* earthquakes will be the entire result from the api, width and height are integers */}
      <MapComponent earthquakes={TestData} height={500} />
    </div>
  );
}

export default App;
