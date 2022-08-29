import React from "react";
import Card from "./Card";

export default function CardContainer({ earthQuakes }) {
  return (
    <div className="cardContainer">
      {earthQuakes?.features?.map((quake, index) => (
        <Card
          key={index}
          magnitude={quake.properties.mag}
          location={quake.properties.place}
          detail={quake?.properties?.detail}
        />
      ))}
    </div>
  );
}
