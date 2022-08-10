import React from "react";

function ImgNasa(props) {
  return (
    //https://api.nasa.gov/planetary/apod?api_key=QTn87VZbOKLprDWy6Dhy3ymYHgx67DCOBxtPBZFr
    <img
      src={props.url}
      className="img-fluid d-flex justify-content-center"
      alt="from Nasa"
    />
  );
}

export default ImgNasa;
