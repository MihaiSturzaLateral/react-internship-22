import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container-sm footerStyle">
          <div className="footer-left">
            <span>© Copyright 2022 - Dan Floruta</span>
          </div>
          <div className="footer-right">
            <p>
              DATA Source: The USGS Earthquake Hazards Program of the U.S.
              Geological Survey (USGS), part of the National Earthquake Hazards
              Reduction Program (NEHRP) led by the National Institute of
              Standards and Technology(NIST)
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
