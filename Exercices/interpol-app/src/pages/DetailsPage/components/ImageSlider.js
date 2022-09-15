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

  useEffect(() => {
    getDetailPhoto(imgDetails)(dispatch);
  }, []);

  return (
    <Carousel>
      {dataFromStore?.photoDet?._embedded?.images?.map((photo, key) => {
        return (
          <Carousel.Item key={key}>
            <img className="image" src={photo?._links?.self?.href} alt="" />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default ImageSlider;
