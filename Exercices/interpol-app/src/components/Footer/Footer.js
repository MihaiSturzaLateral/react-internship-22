import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="ft-left">
        <span>Data Source: Interpol Wanted Lists</span>
      </div>
      <div className="ft-right">
        <span>
          Red Notices are issued for fugitives wanted either for prosecution or
          to serve a sentence. A red notice is a request to law enforcement
          worldwide to locate and provisionally arrest a person pending
          extradition, surrender, or similar legal action.{" "}
        </span>
      </div>
    </div>
  );
};

export default Footer;
