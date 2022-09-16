import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <MDBFooter className="fixed-bottom text-muted bg-dark">
        <div class="float-container">
          <div class="float-child-1">
            <b>Data Source: Interpol Wanted lists</b>
          </div>
          <div class="float-child-2">
            Red Notices are issued for fugitives wanted either for persecution
            or to serve a sentence. A Red Notice is a request to law enforcement
            worldwide to locate and provisionally arrest a person pending
            extradition, surrender, or similar legal action.
          </div>
        </div>
      </MDBFooter>
    </>
  );
};
export default Footer;
