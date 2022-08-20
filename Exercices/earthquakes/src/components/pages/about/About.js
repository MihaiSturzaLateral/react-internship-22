import React from "react";

const About = () => {
  return (
    <>
      <h1 className="title">About</h1>
      <section className="about">
        <div className="main">
          <img src={require("./img/img.jpeg")} alt="img"></img>
          <div className="about-text">
            <br></br>
            <br></br>
            <br></br>
            <h1>Name: Sidea Andreea-Georgiana</h1>
            <h1>Age: 20</h1>
            <h1>Contact: sidea.andreeageorgiana@gmail.com</h1>
          </div>
        </div>
        <p className="paragraf">
          Good vibes only
          <br></br>
          Incredible change happens in your life when you decide to take control
          of what you do have power over instead of craving control over what
          you don't. Difficult roads often lead to beautiful destinations. Look
          for something positive in each day, even if some days you have to look
          a little harder. Every day is a new beginning. Take a deep breath,
          smile and start again. Never give up on the things that make you
          smile.
        </p>
      </section>
    </>
  );
};

export default About;
