import React, { useEffect, useState } from "react";
import "./nasaPhoto.css";

const apiKey = process.env.REACT_APP_NASA_KEY;

function NasaPhoto() {
  const [photoData, setPhotoData] = useState(null);
  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
      );
      const data = await res.json();
      setPhotoData(data);
      console.log(data);
    }
  }, []); // run once

  if (!photoData) return <div />;

  return (
    <div className="nasa-photo">
      {photoData.media_type === "image" ? (
        <img src={photoData.url} alt={photoData.title} className="photo" />
      ) : (
        <iframe
          title="space-video"
          src={photoData.url}
          frameBorder="0"
          gesture="media"
          allow="encrypted-media"
          allowFullScreen
          className="photo"
        />
      )}

      <div>
        <h1>{photoData.title}</h1>
        <p className="explanation">{photoData.explanation}</p>
      </div>
    </div>
  );
}

export default NasaPhoto;
