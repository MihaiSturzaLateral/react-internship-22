import React, { useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import CardDesign from "./Components/CardDesign/CardDesign";
import { fetchDataByCity,fetchCoordinates,fetchData } from "./redux/actions/action";
import CardCoord from "./Components/CardCoord";

const Design = () => {
  const [lat, setLatitude] = useState(null);
  const [long, setLong] = useState(null);
  const [town, setTown] = useState(null);
  const [visible, setVisible] = useState(false);
  const [coord, setCoord] = useState(false);
  const { data, latitude, longitude } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
      <Form className="form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Latitude</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setLatitude(e.target.value)}
          />
          <Form.Label>Longitude</Form.Label>
          <Form.Control type="text" onChange={(e) => setLong(e.target.value)} />

          <Form.Label style={{ marginTop: "5%" }}>
            Or enter city name:
          </Form.Label>
          <Form.Control type="text" onChange={(e) => setTown(e.target.value)} />
        </Form.Group>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Button
            style={{ backgroundColor: "green", marginBottom: "10px" }}
            type="button"
            onClick={(e) => {
              e.preventDefault();
              if (lat && long && !town) {
                dispatch(fetchData(lat, long));
                setVisible(true);
                setCoord(false);
              }
              if (town && !lat && !long) {
                dispatch(fetchDataByCity(town));
                setVisible(true);
                setCoord(false);
              }
            }}
          >
            Get Location
          </Button>
          <Button
            style={{ backgroundColor: "green" }}
            type="button"
            onClick={(e) => {
              e.preventDefault();
              if (town && !lat && !long) {
                dispatch(fetchCoordinates(town));
                setVisible(false);
                setCoord(true);
              }
            }}
          >
            Get location coordinates
          </Button>
        </div>
      </Form>
      <div style={{ marginLeft: "10%" }}>
        {visible && (
          <CardDesign
            name={data?.name}
            country={data?.sys?.country}
            wind={data?.wind?.speed}
            humidity={data?.main?.humidity}
            weather={data?.weather?.map((item) => item.description)}
            weather2={data?.weather?.map((item) => item.main)}
            icon={data?.weather?.map((item) => item.icon)}
            tempMin={data?.main?.temp_min}
            tempMax={data?.main?.temp_max}
            sunrise={data?.sys?.sunrise}
            sunset={data?.sys?.sunset}
            time={data?.timezone}
          />
        )}
      </div>
      {coord && <CardCoord latitude={latitude} longitude={longitude} />}
    </>
  );
};

export default Design;
