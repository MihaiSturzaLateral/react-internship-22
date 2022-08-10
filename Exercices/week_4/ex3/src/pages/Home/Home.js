import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import ImgNasa from "./components/Img";
function Home() {
  const [img, setImg] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=QTn87VZbOKLprDWy6Dhy3ymYHgx67DCOBxtPBZFr"
      )
      .then((res) => {
        extensionCheck(res.data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const extensionCheck = (a) => {
    const filteredExtension = a.slice(-3);
    if (!filteredExtension === "jpg" || filteredExtension === "png")
      setImg("https://via.placeholder.com/600/92c952");
    else setImg(a);
    console.log(filteredExtension);
  };

  return (
    <>
      <h1 className="text-info d-flex justify-content-center">Hello, Erik!</h1>
      <div className="d-flex justify-content-center">
        <ImgNasa url={img} />
      </div>
    </>
  );
}

export default Home;
