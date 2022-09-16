import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import Label from "./Label";
import "./Details.css";

const Details = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState([]);
  const location = useLocation();
  const url = location.state;

  React.useEffect(() => {
    axios.get(url).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  console.log(url);

  return (
    <>
      <div className="details">
        <button className="buttonBack" onClick={() => navigate(-1)}>
          {" "}
          {"<= Go Back"}
        </button>
      </div>
      <div className="noticesHeader">
        <span>
          Notice on: {post?.name} {post?.forename}
        </span>
      </div>
      <div className="inlineContainer">
        <div className="containerLabel">
          <Label
            eyesColorsId={post?.eyes_colors_id}
            weight={post?.weight}
            height={post?.height}
            dateOfBirth={post?.date_of_birth}
            sexId={post?.sex_id}
            place={post?.place}
            nationalities={post?.nationalities}
          />
        </div>
        <div className="imgContainer">
          <img
            src={post._links?.thumbnail?.href}
            className="dt-img img"
            alt="photos"
            width={350}
            height={350}
          />
        </div>
      </div>
      {}
      <div className="containerBottom">
        <div className="container-sm dt-bottom">
          <div className="btn btn-danger mb-3 ">Arrest warants</div>
          <div className="dt-bottom-det">
            {post.arrest_warrants?.map((e) => {
              return (
                <span>
                  <span className="fw-bold">
                    Issuing country:
                    {e.issuing_country_id}
                  </span>
                  <hr></hr>
                  <h3 className="text">CHARGE WITH: </h3>
                  <p className="text">{e.charge}</p>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
