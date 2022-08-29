import React from "react";
import img1 from "../photos/profile.jpg";

const About = () => {
  return (
    <>
      <div className="container-sm" style={{ marginBottom: "90px" }}>
        <h1 className="aboutTitle">About</h1>
        <div className="imageDetails">
          <img src={img1} className="imageAbout" alt="" />
          <div className="details">
            <p className="about-detail">Name: Dan Floruta</p>
            <p className="about-detail">Age: 31</p>
            <p className="about-detail">Contact: dan.floruta@gmail.com</p>
          </div>
        </div>
        <p className="aboutText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non veniam
          repudiandae illum tempore? Culpa dicta inventore consequatur id natus
          qui necessitatibus cumque. Mollitia exercitationem dolorum asperiores
          cupiditate molestias architecto velit facere? Ullam sapiente tenetur
          assumenda eaque non similique, mollitia quo ad nesciunt, soluta
          deleniti eligendi odit autem! Nam quod rerum voluptate expedita eius!
          Repellendus fugit ipsa sit nulla exercitationem, dolorum sint a
          molestiae quam odit consectetur, nostrum, vitae consequuntur assumenda
          necessitatibus totam aut deleniti. Animi!
        </p>
      </div>
    </>
  );
};

export default About;
