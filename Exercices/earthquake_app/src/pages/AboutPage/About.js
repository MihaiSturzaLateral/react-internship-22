import React from "react";
import "./About.css";
import Header from "../../components/Header/Header";

const About = () => {
  return (
    <>
      <Header />
      <div className="containerAbout">
        <div className="about">
          <h1 className="ab">About</h1>
        </div>
        <div className="wrapperAbout">
          <img src="./ionut.jpg" alt="" className="image" />
          <div className="details">
            <h1 className="detail">Name: Ionut Iova</h1>
            <h1 className="detail">Age: 23</h1>
            <h1 className="detail">Phone Number: 0744 497 422</h1>
            <h1 className="detail">Email: iova_ionut99@yahoo.com</h1>
          </div>
        </div>
        <div className="description">
          <p className="desc">
            But i must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and i will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences that are extremely painful. Nor
            again is there anyone who loves or pursues or desires to obtain pain
            of itself, because it is pain, but because occasionally
            circumstances occur in which toil and pain can procure him some
            great pleasure. To take a trivial example, which of us ever
            undertakes laborious physical exercise, except to obtain some
            advantage from it? But who has any right to find fault with a man
            who chooses to enjoy a pleasure that has no annoying consequences,
            or one who avoids a pain that produces no resultant pleasure?
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
