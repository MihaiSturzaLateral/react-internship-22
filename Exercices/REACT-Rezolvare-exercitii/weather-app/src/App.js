import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import reqWeather from "./redux/actions/actions";

function App() {
  const [data, setData] = useState(null);
  const [value, setValue] = useState(" ");
  const api_key = "3e56b33c79922775f67f580350a81b18";

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=${api_key}`
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [value]);

  console.log(data);
  return (
    <div className="App">
      <div className="upper-div">
        <div className="left-div">
          <button style={{ backgroundColor: "green", fontSize: "25px" }}>
            Get location
          </button>
          <b
            style={{
              fontSize: "20px",
              paddingRight: "15px",
              paddingLeft: "15px",
            }}
          >
            Latitude:
          </b>
          <input></input>
          <b
            style={{
              fontSize: "20px",
              paddingRight: "15px",
              paddingLeft: "15px",
            }}
          >
            Longitude:
          </b>
          <input></input>
        </div>

        <b style={{ fontSize: "20px", paddingRight: "15px" }}>
          Or enter city name:
        </b>
        <input value={value} onChange={(e) => setValue(e.target.value)}></input>
      </div>
      <div className="under-div">
        <button>Get Weather by lat,long</button>
        <button>Get Weather by City</button>
      </div>
      <div className="div-resp">
        Soarele rasare: {data?.sys.sunrise}
        Soarele apune: {data?.sys.sunset}
        Viteza vant: {data?.wind.speed}
        Temperatura: {data?.wind.deg}
      </div>
    </div>
  );
}

export default App;
