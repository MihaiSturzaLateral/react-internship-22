import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";
import "./Footer.css";

const Footer = () => {
  return (
    <MDBFooter bgColor="primary" className="text-white text-lg-left">
      <div className="d-flex p-2">
        <div className="text-left" id="copyright">
          &copy; Copyright {new Date().getFullYear()}
          {" - Ionut Iova"}
        </div>
        <div id="msg">
          DATA Source: The USGS Earthquake Hazards Program of the U.S.
          Geological Survey (USGS), part of the National Earthquake Hazards
          Reduction Program (NEHRP) led by the National Institute of Standards
          and Technology (NIST).
        </div>
      </div>
    </MDBFooter>
  );
};

export default Footer;
