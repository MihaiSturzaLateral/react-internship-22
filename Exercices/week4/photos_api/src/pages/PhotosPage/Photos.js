import React, { useEffect, useState } from "react";
import PhotoCard from "./components/PhotoCard";

const Photos = () => {
  const [photos, setPhotos] = useState([]);

  const fetchPhotos = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/photos/");
      const data = await res.json();
      setPhotos(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <div className="photoContainer">
      {photos.map((photo) => {
        return <PhotoCard url={photo.url} title={photo.title} />;
      })}
    </div>
  );
};

export default Photos;
