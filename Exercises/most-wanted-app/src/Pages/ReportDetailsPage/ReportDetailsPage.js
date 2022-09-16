import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import CardDetails from "../../Components/CardDetails/CardDetails";
import "./ReportDetailsPage.css";
import BadgeDetailsPage from "../../Components/BadgeDetailsPage";
import ArrestCard from "../../Components/ArrestCard/ArrestCard";
import Slideshow from "../../Components/Slideshow/Slideshow";

const ReportDetailsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState(null);
  const[pic,setPic]=useState(null);
  const url = location.state.linkDetails;
  const urlPic=location.state.linkImages;
  const badge = location.state.badgeColor;
  let text = "";
  if (badge === "warning") {
    text = "Yellow Notice on: ";
  } else text = "Red Notice on: ";

  const fetchData = () => {
    axios.get(url).then((response) => {
      setData(response.data);
    });
  };

  const fetchPic=()=>{
    axios.get(urlPic).then((response)=>{
      setPic(response.data._embedded.images);
    })
  }

  useEffect(() => {
    fetchData();
    fetchPic();
  }, []);
  return (
    <>
      <div className="buttons">
        {badge === "danger" ? (
          <Button variant="danger" onClick={() => navigate("/")}>
            Back
          </Button>
        ) : (
          <Button variant="warning" onClick={() => navigate("/")}>
            Back
          </Button>
        )}
      </div>

      <div className="cardDetails">
        <div className="bgdCard">
          <BadgeDetailsPage
            fname={data?.forename}
            lname={data?.name}
            color={badge}
            title={text}
          />

          <CardDetails
            eyesColor={data?.eyes_colors_id}
            weight={data?.weight}
            height={data?.height}
            dateOfBirth={data?.date_of_birth}
            country={data?.country_of_birth_id}
            sex={data?.sex_id}
            place={data?.place_of_birth}
            nationalities={data?.nationalities}
          />
        </div>
        <div style={{ marginLeft: "100px", width: "30%", border:'1px solid black'}}>
        <Slideshow pictures={pic} />
        </div>
      </div>
      {badge === "danger" && (
        <div className="arrestWarrants">
          <div>
            <BadgeDetailsPage color={badge} title={"Arrest warrants:"} />
            {data?.arrest_warrants?.map((item) => {
              const { issuing_country_id, charge } = item;
              return (
                <ArrestCard issuing={issuing_country_id} charge={charge} />
              );
            })}
          </div>
        </div>
      )}
      
    </>
  );
};

export default ReportDetailsPage;
