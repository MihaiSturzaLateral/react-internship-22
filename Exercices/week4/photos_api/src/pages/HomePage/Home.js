import React from "react";
import "./Home.css";

const Home = () => {
  const loadImg = () => {
    const resultDiv = document.querySelector(".result");
    fetch(
      "https://api.unsplash.com/search/photos?query=formula1&per_page=1&client_id=1cM4Py4Z4rBO1pjQY1anEJqAwssN72LZeM4q-r6DvKo"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        for (let i = 0; i < data.results.length; i++) {
          let imageElement = document.createElement("img");
          imageElement.src = data.results[i].urls.thumb;
          resultDiv.append(imageElement);
        }
      })
      .catch((e) => {
        console.log("error --> ", e);
      });
  };

  return (
    <div className="container">
      <h1 className="msg">Hello, Ionut!</h1>
      <div className="wrapper" id="photoResult">
        <div className="result"></div>
      </div>
      <div className="buttonBox">
        <button className="btn" id="photoBtn" onClick={loadImg}>
          Get Photo
        </button>
      </div>
    </div>
  );
};

export default Home;
