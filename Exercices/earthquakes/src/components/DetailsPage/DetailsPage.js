import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import MapComponent from "../MapComponent/MapComponent";
import Label from "./Label";

const DetailsPage = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState([]);
  const location = useLocation();
  const url = location.state;

  React.useEffect(() => {
    axios.get(url).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <>
      <div className="details">
        <button className="buttonBack" onClick={() => navigate(-1)}>
          {" "}
          {"<= Go Back"}
        </button>
        <h1>EarthQuake Details:</h1>
      </div>
      <aside className="mag">
        <div className="Magnitude">{`Magnitude: ${post?.properties?.mag}`}</div>
      </aside>
      <div className="map">
        <MapComponent earthquakes={post} height={200} width={200} />
      </div>
      <div className="containerLabel">
        <Label
          title={post?.properties?.title}
          place={post?.properties?.place}
          time={post?.properties?.time}
          status={post?.properties?.status}
          tsunami={post?.properties?.tsunami}
        />
      </div>
    </>
  );
};

export default DetailsPage;
