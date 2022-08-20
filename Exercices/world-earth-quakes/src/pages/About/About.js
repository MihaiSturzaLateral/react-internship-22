import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/GenericNavbar";
import aboutImg from "./aboutImg.jpg";
function About() {
  return (
    <>
      <Navbar />
      <div className="container-sm" style={{ marginBottom: "90px" }}>
        <h1 className="general-h1">About</h1>
        <div className="img-details">
          <img src={aboutImg} className="img" alt="poza autor" />
          <div className="details">
            <p className="p-about">Name: Erik Schmidt</p>
            <p className="p-about">Age: 19</p>
            <p className="p-about">Contact: schmidterik661@gmail.com</p>
          </div>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default About;
