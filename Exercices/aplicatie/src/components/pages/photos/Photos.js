import React, { useEffect, useState } from "react";
import Card from "./Card";

const url = "https://jsonplaceholder.typicode.com/photos";

const Photos = () => {
  const [data, setData] = useState([]);

  const fetchPhotos = async () => {
    const response = await fetch(url);
    const dates = await response.json();
    setData(dates);
  };
  useEffect(() => {
    fetchPhotos();
  }, []);
  console.log(data);
  return (
    <>
      <h1>Photos</h1>
      <div>
        {data.map((element) => {
          const { id, title, url } = element;
          return <Card title={title} id={id} url={url} />;
        })}
      </div>
    </>
  );
};
export default Photos;
