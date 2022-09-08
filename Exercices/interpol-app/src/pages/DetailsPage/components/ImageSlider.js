import Carousel from "react-bootstrap/Carousel";
import React, { useEffect } from "react";
import "./ImageSlider.css";
import { useLocation } from "react-router-dom";
import { getDetailPhoto } from "../../../redux/actions/noticeActions";
import { useDispatch, useSelector } from "react-redux";

const ImageSlider = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const dataFromStore = useSelector((state) => state);
  const { imgDetails } = location.state;
  console.log("photoUrlDetails: ", imgDetails);
  console.log("photoDet:", dataFromStore?.photoDet?._embedded?.images.length);
  const photoMap = dataFromStore?.photoDet?._embedded?.images?.map((x) => x);
  console.log("map", photoMap);

  useEffect(() => {
    getDetailPhoto(imgDetails)(dispatch);
  }, []);

  return (
    <Carousel className="carousel">
      <Carousel.Item>
        <img
          className="image"
          src={
            dataFromStore?.photoDet?._embedded?.images[0]?._links?.self?.href
          }
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="image"
          src={
            dataFromStore?.photoDet?._embedded?.images[1]?._links?.self?.href
          }
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="image"
          src={
            dataFromStore?.photoDet?._embedded?.images[2]?._links?.self?.href
          }
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageSlider;
