import React from "react";
import image from "../components/image.png";

const About = () => {
  return (
    <div className="about">
      <h1 id="title-about">About</h1>
      <div className="photo-info">
      <div>
        <img id="myImage" src={image} alt="poza"/>
      </div>
      <div className="info">
        <label>
            Name: Sergiu Ivan
        </label>
        <br />
        <label>
            Age: 22
        </label>
        <br />
        <label>
            Contact: sergiu_ivan99@yahoo.com
        </label>
      </div>
      </div>
      <p id="description">Salut! Ma numesc Ivan Sergiu-Cosmin, sunt nascut pe data de 04.10.1999 si locuiesc in 
            Oradea. Am absolvit Facultatea de Inginerie Electrica si Tehnologia Informatiei, specializarea Calculatoare in acest an. In timpul
            liber imi place sa ies in oras cu prietenii, sa citesc si sa invat lucruri noi. Pentru mai multe detalii pot fi
            contactat la adresa de Email mentionata mai sus.</p>
    </div>
  );
};

export default About;
