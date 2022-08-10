import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import axios from "axios";

function Photos() {
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        setPhoto(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="container-sm mt-4 d-flex flex-wrap justify-content-between">
        {photo.map((photo) => {
          return <Card key={photo.id} url={photo.url} title={photo.title} />;
        })}
      </div>
    </>
  );
}

export default Photos;
